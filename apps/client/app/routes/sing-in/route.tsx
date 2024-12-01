import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, json, useActionData } from "@remix-run/react";
import { AuthorizationError } from "remix-auth";
import { ValiError, flatten } from "valibot";
import { authenticator } from "~/utils/authenticator.server";

export async function action(action: ActionFunctionArgs) {
	try {
		return await authenticator.authenticate("user-pass", action.request, {
			successRedirect: "/dashboard",
			throwOnError: true,
			context: action.context,
		});
	} catch (error) {
		console.error(error);
		if (error instanceof Response) return error;
		if (error instanceof AuthorizationError) {
			if (error.cause instanceof ValiError) {
				return json({
					formError: flatten(error.cause.issues).nested,
				});
			}
			if (error.cause instanceof Error) {
				console.warn("ERROR CAUSA", error.cause.message);
				return json({
					authError: error.cause.message,
				});
			}
		}
	}
}

// Finally, we need to export a loader function to check if the user is already
// authenticated and redirect them to the dashboard
// export async function loader({ request }: LoaderFunctionArgs) {
// const session = await sessionStorage.getSession(
// 	request.headers.get("cookie"),
// );
// const user = session.get("user");
// if (user) throw redirect("/dashboard");
// return data(null);
// }

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

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member?{" "}
					<span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						Start a 14 day free trial
					</span>
				</p>
			</div>
		</div>
	);
}
