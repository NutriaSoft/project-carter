import {
	EnvelopeIcon,
	ExclamationCircleIcon,
	ExclamationTriangleIcon,
	UsersIcon,
} from "@heroicons/react/20/solid";
import { authClient } from "@package/auth";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, json, redirect, useActionData } from "@remix-run/react";
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

const RegisterSchema = object({
	name: pipe(
		string("Your name must be a string."),
		nonEmpty("Please enter your name."),
	),
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

export async function action({
	request,
}: ActionFunctionArgs): Promise<Response | undefined> {
	try {
		const formData = await request.formData();

		const formParse = parse(RegisterSchema, {
			password: String(formData.get("password")),
			email: String(formData.get("email")),
			name: String(formData.get("name")),
		});

		const origin = request.headers.get("origin");
		const callbackURL = `${origin}/sing-in/`;
		const { error } = await authClient.signUp.email({
			email: formParse.email,
			password: formParse.password,
			name: formParse.name,
			callbackURL,
		});

		// console.log(error);
		if (error) throw new Error(error.message, { cause: error });

		return redirect("./success");
	} catch (error) {
		if (error instanceof Response) return error;

		if (error instanceof Error) {
			console.warn("ERROR CAUSA", error.cause);
			return json({
				authError: error.message,
			});
		}
		if (error instanceof ValiError) {
			return json({
				formError: flatten(error.issues).nested,
			});
		}
	}
}

export default function SingUp() {
	const serverAction = useActionData<typeof action>();

	return (
		<div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-dvh">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Your Company"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto"
				/>
				<h2 className="dark:text-gray-200 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign up to your account
				</h2>
			</div>
			{serverAction?.authError?.message}
			<Form method="post" className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
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
				<div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6">
					<div className="col-span-full">
						<label
							htmlFor="email"
							className=" dark:text-gray-200 odd:block text-sm font-medium leading-6 text-gray-900 capitalize"
						>
							name
						</label>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<UsersIcon
									aria-hidden="true"
									className="h-5 w-5 text-gray-400"
								/>
							</div>
							<input
								id="name"
								name="name"
								type="name"
								aria-invalid="true"
								aria-describedby="name-error"
								defaultValue={"name awasome"}
								placeholder="name"
								className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							{serverAction?.formError?.name ? (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon
										aria-hidden="true"
										className="h-5 w-5 text-red-500"
									/>
								</div>
							) : null}
						</div>
						{serverAction?.formError?.name ? (
							<p id="email-error" className="mt-2 text-sm text-red-600">
								{serverAction?.formError?.name}
							</p>
						) : null}
					</div>

					<div className="col-span-full">
						<label
							htmlFor="email"
							className="dark:text-gray-200 block text-sm font-medium leading-6 text-gray-900"
						>
							Email
						</label>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<EnvelopeIcon
									aria-hidden="true"
									className="h-5 w-5 text-gray-400"
								/>
							</div>
							<input
								id="email"
								name="email"
								type="email"
								aria-invalid="true"
								aria-describedby="email-error"
								placeholder="you@example.com"
								defaultValue={"you@example.com"}
								className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							{serverAction?.formError?.email ? (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon
										aria-hidden="true"
										className="h-5 w-5 text-red-500"
									/>
								</div>
							) : null}
						</div>
						{serverAction?.formError?.email ? (
							<p id="email-error" className="mt-2 text-sm text-red-600">
								Not a valid email address.
							</p>
						) : null}
					</div>

					<div className="col-span-full">
						<label
							htmlFor="email"
							className="dark:text-gray-200 block text-sm font-medium leading-6 text-gray-900 capitalize"
						>
							password
						</label>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<EnvelopeIcon
									aria-hidden="true"
									className="h-5 w-5 text-gray-400"
								/>
							</div>
							<input
								id="password"
								name="password"
								type="password"
								aria-invalid="true"
								aria-describedby="password-error"
								placeholder="*********"
								defaultValue={"123321321"}
								className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>

							{serverAction?.formError?.password ? (
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
									<ExclamationCircleIcon
										aria-hidden="true"
										className="h-5 w-5 text-red-500"
									/>
								</div>
							) : null}
						</div>
						<p id="email-error" className="mt-2 text-sm text-red-600">
							{serverAction?.formError?.password}
						</p>
					</div>

					{/* 
					<div className="col-span-full sm:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								placeholder="you@example.com"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>  */}
				</div>

				<div className="my-4">
					<div className="relative">
						<div
							aria-hidden="true"
							className="absolute inset-0 flex items-center"
						>
							<div className="w-full border-t border-gray-300" />
						</div>
						<div className="relative flex justify-center" />
					</div>
				</div>

				<div className="flex items-center justify-end space-x-4">
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Cancel
						</button>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Submit
						</button>
					</div>
				</div>
			</Form>
		</div>
	);
}
