// import { faker } from "@faker-js/faker";
// import { EnvelopeIcon, UsersIcon } from "@heroicons/react/20/solid";
import { PhotoIcon } from "@heroicons/react/24/solid";
// import { authClient } from "@package/auth";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import {
	ValiError,
	// 	email,
	flatten,
	// 	minLength,
	// 	nonEmpty,
	// 	object,
	// 	parse,
	// 	pipe,
	// 	string,
} from "valibot";
// import { authServer } from "~/utils/auh-server.server";

// const RegisterSchema = object({
// 	role: pipe(
// 		string("Your role must be a string."),
// 		nonEmpty("Please enter your role."),
// 	),
// 	name: pipe(
// 		string("Your name must be a string."),
// 		nonEmpty("Please enter your name."),
// 	),
// 	email: pipe(
// 		string("Your email must be a string."),
// 		nonEmpty("Please enter your email."),
// 		email("The email address is badly formatted."),
// 	),
// 	password: pipe(
// 		string("Your password must be a string."),
// 		nonEmpty("Please enter your password."),
// 		minLength(8, "Your password must have 8 characters or more."),
// 	),
// });

export async function action({ request }: ActionFunctionArgs) {
	try {
		const requestClone = request.clone();
		const formData = await requestClone.formData();
		// const headers = requestClone.headers;

		console.log(formData);

		// const passwordField = String(formData.get("password"));
		// const emailField = String(formData.get("email"));
		// const nameField = String(formData.get("name"));
		// const roleField = String(formData.get("role"));

		// const formValidate = parse(RegisterSchema, {
		// 	name: nameField,
		// 	email: emailField,
		// 	password: passwordField,
		// 	role: roleField,
		// });

		// headers.delete("content-length");
		// const authRequest = await authServer
		// 	.headers(headers)
		// 	.url("/admin/create-user")
		// 	.json(formValidate)
		// 	.post()
		// 	.res();

		// console.log({ formValidate, headers });
		// const newUser = await authClient.admin.createUser({
		// 	name: formValidate.name,
		// 	email: formValidate.email,
		// 	password: formValidate.password,
		// 	role: formValidate.role,
		// });

		// console.log("NEW USER", authRequest);

		return null;
	} catch (error) {
		console.log(error.response);

		if (error instanceof ValiError) {
			return {
				formError: flatten(error.issues).nested,
			};
		}
		return error;
	}
}

export default function Index() {
	// const sex = faker.person.sexType();
	// const firstName = faker.person.firstName(sex);
	// const lastName = faker.person.lastName();
	// const email = faker.internet.email({ firstName, lastName });

	// const serverAction = useActionData<typeof action>();

	return (
		// <Form method="post" className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
		// 	<div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6">
		// 		<div className="col-span-full">
		// 			<label
		// 				htmlFor="role"
		// 				className="block text-sm/6 font-medium text-gray-900 dark:text-gray-200 capitalize"
		// 			>
		// 				role
		// 			</label>
		// 			<select
		// 				id="role"
		// 				name="role"
		// 				defaultValue="admin"
		// 				className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
		// 			>
		// 				<option>admin</option>
		// 				<option>user</option>
		// 			</select>
		// 		</div>

		// 		<div className="col-span-full">
		// 			<label
		// 				htmlFor="name"
		// 				className="block text-sm dark:text-gray-200 font-medium leading-6 text-gray-900 dark:text-gray-200 capitalize"
		// 			>
		// 				name
		// 			</label>
		// 			<div className="relative mt-2 rounded-md shadow-sm">
		// 				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		// 					<UsersIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
		// 				</div>
		// 				<input
		// 					id="name"
		// 					name="name"
		// 					type="name"
		// 					aria-invalid="true"
		// 					aria-describedby="name-error"
		// 					defaultValue={`${firstName} ${lastName}`}
		// 					placeholder="name"
		// 					className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		// 				/>
		// 				{/* {serverAction?.formError?.name ? (
		// 					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
		// 						<ExclamationCircleIcon
		// 							aria-hidden="true"
		// 							className="h-5 w-5 text-red-500"
		// 						/>
		// 					</div>
		// 				) : null} */}
		// 			</div>
		// 			{/* {serverAction?.formError?.name ? (
		// 				<p id="email-error" className="mt-2 text-sm text-red-600">
		// 					{serverAction?.formError?.name}
		// 				</p>
		// 			) : null} */}
		// 		</div>

		// 		<div className="col-span-full">
		// 			<label
		// 				htmlFor="email"
		// 				className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
		// 			>
		// 				Email
		// 			</label>
		// 			<div className="relative mt-2 rounded-md shadow-sm">
		// 				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		// 					<EnvelopeIcon
		// 						aria-hidden="true"
		// 						className="h-5 w-5 text-gray-400"
		// 					/>
		// 				</div>
		// 				<input
		// 					id="email"
		// 					name="email"
		// 					type="email"
		// 					aria-invalid="true"
		// 					aria-describedby="email-error"
		// 					placeholder="you@example.com"
		// 					defaultValue={email}
		// 					className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		// 				/>
		// 				{/* {serverAction?.formError?.email ? (
		// 					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
		// 						<ExclamationCircleIcon
		// 							aria-hidden="true"
		// 							className="h-5 w-5 text-red-500"
		// 						/>
		// 					</div>
		// 				) : null} */}
		// 			</div>
		// 			{/* {serverAction?.formError?.email ? (
		// 				<p id="email-error" className="mt-2 text-sm text-red-600">
		// 					Not a valid email address.
		// 				</p>
		// 			) : null} */}
		// 		</div>

		// 		<div className="col-span-full">
		// 			<label
		// 				htmlFor="email"
		// 				className="block text-sm font-medium leading-6 dark:text-gray-200 text-gray-900 dark:text-gray-200 capitalize"
		// 			>
		// 				password
		// 			</label>
		// 			<div className="relative mt-2 rounded-md shadow-sm">
		// 				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		// 					<EnvelopeIcon
		// 						aria-hidden="true"
		// 						className="h-5 w-5 text-gray-400"
		// 					/>
		// 				</div>
		// 				<input
		// 					id="password"
		// 					name="password"
		// 					type="password"
		// 					aria-invalid="true"
		// 					aria-describedby="password-error"
		// 					placeholder="*********"
		// 					defaultValue={"123123123"}
		// 					className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		// 				/>

		// 				{/* {serverAction?.formError?.password ? (
		// 					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
		// 						<ExclamationCircleIcon
		// 							aria-hidden="true"
		// 							className="h-5 w-5 text-red-500"
		// 						/>
		// 					</div>
		// 				) : null} */}
		// 			</div>
		// 			<p id="email-error" className="mt-2 text-sm text-red-600">
		// 				{/* {serverAction?.formError?.password} */}
		// 			</p>
		// 		</div>

		// 		{/*
		// 	<div className="col-span-full sm:col-span-2">
		// 		<label
		// 			htmlFor="email"
		// 			className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
		// 		>
		// 			Email
		// 		</label>
		// 		<div className="mt-2">
		// 			<input
		// 				id="email"
		// 				name="email"
		// 				type="email"
		// 				placeholder="you@example.com"
		// 				className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		// 			/>
		// 		</div>
		// 	</div>  */}
		// 	</div>

		// 	<div className="my-4">
		// 		<div className="relative">
		// 			<div
		// 				aria-hidden="true"
		// 				className="absolute inset-0 flex items-center"
		// 			>
		// 				<div className="w-full border-t border-gray-300" />
		// 			</div>
		// 			<div className="relative flex justify-center" />
		// 		</div>
		// 	</div>

		// 	<div className="flex items-center justify-end space-x-4">
		// 		<div>
		// 			<button
		// 				type="submit"
		// 				className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		// 			>
		// 				Cancel
		// 			</button>
		// 		</div>
		// 		<div>
		// 			<button
		// 				type="submit"
		// 				className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		// 			>
		// 				Submit
		// 			</button>
		// 		</div>
		// 	</div>
		// </Form>
		<Form method="post" className="pt-8" encType="multipart/form-data">
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
						Profile CREATE MEMBER
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-500">
						This information will be displayed publicly so be careful what you
						share.
					</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-4">
							<label
								htmlFor="username"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Username
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
										workcation.com/
									</span>
									<input
										id="username"
										name="username"
										type="text"
										placeholder="janesmith"
										autoComplete="username"
										className=" dark:autofill:[-webkit-text-fill-color:#fff] flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="about"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								About
							</label>
							<div className="mt-2">
								<textarea
									id="about"
									name="about"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
									defaultValue={""}
								/>
							</div>
							<p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-500">
								Write a few sentences about yourself.
							</p>
						</div>

						{/* <div className="col-span-full">
							<label
								htmlFor="photo"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Photo
							</label>
							<div className="mt-2 flex items-center gap-x-3">
								<UserCircleIcon
									aria-hidden="true"
									className="size-12 text-gray-300"
								/>
								<button
									type="button"
									className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm  hover:bg-indigo-500"
								>
									Change
								</button>
							</div>
						</div> */}

						<div className="col-span-full">
							<label
								htmlFor="cover-photo"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Cover photo
							</label>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-gray-200/25 px-6 py-10">
								<div className="text-center">
									<PhotoIcon
										aria-hidden="true"
										className="mx-auto h-12 w-12 text-gray-300"
									/>
									<div className="mt-4 flex text-sm leading-6 text-gray-600">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
										>
											<span>Upload a file</span>
											<input
												id="file-upload"
												name="file-upload"
												type="file"
												className="sr-only"
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs leading-5 text-gray-600">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
						Personal Information
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						Use a permanent address where you can receive mail.
					</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="first-name"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								First name
							</label>
							<div className="mt-2">
								<input
									id="first-name"
									name="first-name"
									type="text"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Last name
							</label>
							<div className="mt-2">
								<input
									id="last-name"
									name="last-name"
									type="text"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-4">
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="country"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Country
							</label>
							<div className="mt-2">
								<select
									id="country"
									name="country"
									autoComplete="country-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
								</select>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="street-address"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Street address
							</label>
							<div className="mt-2">
								<input
									id="street-address"
									name="street-address"
									type="text"
									autoComplete="street-address"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2 sm:col-start-1">
							<label
								htmlFor="city"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								City
							</label>
							<div className="mt-2">
								<input
									id="city"
									name="city"
									type="text"
									autoComplete="address-level2"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="region"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								State / Province
							</label>
							<div className="mt-2">
								<input
									id="region"
									name="region"
									type="text"
									autoComplete="address-level1"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="postal-code"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								ZIP / Postal code
							</label>
							<div className="mt-2">
								<input
									id="postal-code"
									name="postal-code"
									type="text"
									autoComplete="postal-code"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
						Notifications
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						We&apos;ll always let you know about important changes, but you pick
						what else you want to hear about.
					</p>

					<div className="mt-10 space-y-10">
						<fieldset>
							<legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
								By Email
							</legend>
							<div className="mt-6 space-y-6">
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="comments"
											name="comments"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="comments"
											className="font-medium text-gray-900 dark:text-gray-200"
										>
											Comments
										</label>
										<p className="text-gray-500">
											Get notified when someones posts a comment on a posting.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="candidates"
											name="candidates"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="candidates"
											className="font-medium text-gray-900 dark:text-gray-200"
										>
											Candidates
										</label>
										<p className="text-gray-500">
											Get notified when a candidate applies for a job.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="offers"
											name="offers"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="offers"
											className="font-medium text-gray-900 dark:text-gray-200"
										>
											Offers
										</label>
										<p className="text-gray-500">
											Get notified when a candidate accepts or rejects an offer.
										</p>
									</div>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
								Push Notifications
							</legend>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								These are delivered via SMS to your mobile phone.
							</p>
							<div className="mt-6 space-y-6">
								<div className="flex items-center gap-x-3">
									<input
										id="push-everything"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-everything"
										className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
									>
										Everything
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input
										id="push-email"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-email"
										className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
									>
										Same as email
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input
										id="push-nothing"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-nothing"
										className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
									>
										No push notifications
									</label>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					type="button"
					className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save
				</button>
			</div>
		</Form>
	);
}
