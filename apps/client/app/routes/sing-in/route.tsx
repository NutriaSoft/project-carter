import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, Link, json, redirect, useActionData } from "@remix-run/react";
import {
	type FlatErrors,
	email,
	flatten,
	minLength,
	nonEmpty,
	object,
	pipe,
	safeParse,
	string,
} from "valibot";
import { auth_client } from "~/utils/auth.server";

export const meta: MetaFunction = () => {
	return [
		{ title: "Sing in Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

const LoginSchema = object({
	email: pipe(
		string("Your email must be a string."),
		nonEmpty("Please enter your email."),
		email("The email address is badly formatted."),
	),
	password: pipe(
		string("Your password must be a string."),
		nonEmpty("Please enter your password."),
		minLength(8, "Your password must have 8 characters or more."),
	),
});

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const password = String(formData.get("password"));
	const email = String(formData.get("email"));

	const form = safeParse(
		LoginSchema,
		{ email, password },
		{ abortEarly: true },
	);

	const errors: {
		formError?: FlatErrors<typeof LoginSchema>["nested"];
		authError?: Awaited<ReturnType<typeof auth_client.signUp.email>>["error"];
	} = {};

	if (!form.success) {
		console.error("err", flatten<typeof LoginSchema>(form.issues).nested);
		errors.formError = flatten<typeof LoginSchema>(form.issues).nested;
		return json(errors);
	}

	const { error } = await auth_client.signIn.email({
		email,
		password,
		callbackURL: `${request.headers.get("origin")}/dashboard`,
	});

	if (error) return json(errors);

	return redirect("./success");
}

export default function Route() {
	const serverAction = useActionData<typeof action>();

	return (
		<div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-dvh">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Your Company"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<Form className="space-y-6" method="post">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email address
						</label>
						<div className="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								required
								autoComplete="email"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						{serverAction?.formError?.name ? (
							<p id="email-error" className="mt-2 text-sm text-red-600">
								{serverAction?.formError?.name}
							</p>
						) : null}
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
							<div className="text-sm">
								<Link
									to="#"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
								>
									Forgot password?
								</Link>
							</div>
						</div>
						<div className="mt-1">
							<input
								id="password"
								name="password"
								type="password"
								required
								autoComplete="current-password"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign in
						</button>
					</div>
				</Form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member?{" "}
					{/* <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Start a 14 day free trial
						</a> */}
				</p>
			</div>
		</div>
	);
}
