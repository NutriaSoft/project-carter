import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, json, redirect, useActionData } from "@remix-run/react";
import {
	ValiError,
	email,
	flatten,
	minLength,
	nonEmpty,
	object,
	parse,
	pipe,
	string,
} from "valibot";
import { WretchError } from "wretch/resolver";
import { authServer } from "~/utils/auh-server.server";

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
	try {
		const requestClone = request.clone();
		const formData = await requestClone.formData();

		const { email, password } = parse(LoginSchema, {
			password: String(formData.get("password")),
			email: String(formData.get("email")),
		});

		const authRequest = await authServer
			.headers({ ...requestClone.headers })
			.url("/sign-in/email")
			.post({ email, password })
			.res();

		const mergedHeaders = new Headers([
			...requestClone.headers.entries(),
			...authRequest.headers.entries(),
		]);

		mergedHeaders.delete("content-length");

		return redirect("/dashboard", { headers: mergedHeaders });
	} catch (exception) {
		if (exception instanceof Response) return exception;
		if (exception instanceof WretchError) {
			return json({ authError: exception.message });
		}
		if (exception instanceof ValiError) {
			return json({ formError: flatten(exception.issues).nested });
		}
	}
}

export async function loader({ request }: LoaderFunctionArgs) {
	const requestClone = request.clone();

	const authRequest = await authServer
		.headers({ ...requestClone.headers })
		.get("/get-session")
		.res();

	const mergedHeaders = new Headers([
		...requestClone.headers.entries(),
		...authRequest.headers.entries(),
	]);

	if (!mergedHeaders.get("cookie")?.includes("better-auth")) return null;

	return redirect("/dashboard", {
		headers: mergedHeaders,
	});
}

export default function IndexSingIn() {
	const serverAction = useActionData<typeof action>();

	return (
		<div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-dvh">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Your Company"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto"
				/>
				<h2 className="mt-10 dark:text-gray-200 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in to your account {JSON.stringify(serverAction)}
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<Form className="space-y-6" method="post">
					{serverAction?.authError ? (
						<div className="rounded-md bg-yellow-50 p-4">
							<div className="flex">
								<div className="shrink-0">
									<ExclamationTriangleIcon
										aria-hidden="true"
										className="size-5 text-yellow-400"
									/>
								</div>
								<div className="ml-3">
									<h3 className="text-sm font-medium text-yellow-800">
										{serverAction?.authError}
									</h3>
								</div>
							</div>
						</div>
					) : null}

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
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

						{serverAction?.formError?.email ? (
							<p id="email-error" className="mt-2 text-sm text-red-600">
								{serverAction?.formError?.email}
							</p>
						) : null}
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
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
						{serverAction?.formError?.password ? (
							<p id="password-error" className="mt-2 text-sm text-red-600">
								{serverAction?.formError?.password}
							</p>
						) : null}
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
				<p className=" text-center text-sm text-gray-500">
					Not a member?{" "}
					<Link
						to="/sing-up"
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
					>
						Register now
					</Link>
				</p>
			</div>
		</div>
	);
}
