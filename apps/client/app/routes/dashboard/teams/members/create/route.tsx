import { faker } from "@faker-js/faker";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Input } from "@package/ui/components/input";
import { Label } from "@package/ui/components/label";
import { PhoneInput } from "@package/ui/components/phone-input";
import type { ActionFunctionArgs } from "react-router";
import { Form } from "react-router";
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
import "react-advanced-cropper/dist/style.css";
import {
	CircleStencil,
	FixedCropper,
	ImageRestriction,
} from "react-advanced-cropper";

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
	} catch (error: unknown) {
		if (error instanceof ValiError) {
			return {
				formError: flatten(error.issues).nested,
			};
		}
		return error;
	}
}

export default function Index() {
	const sex = faker.person.sexType();
	const firstName = faker.person.firstName(sex);
	const lastName = faker.person.lastName(sex);
	const email = faker.internet.email({ firstName, lastName });
	const phone = faker.phone.number({ style: "international" });
	const city = faker.location.city();
	const province = faker.location.state();
	const address = faker.location.streetAddress();
	const birthday = faker.date.between({ from: "2000-01-01", to: Date.now() });

	return (
		<Form method="post" className="pt-4" encType="multipart/form-data">
			<section className="pb-8">
				<h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
					Profile CREATE MEMBER
				</h2>
				<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-500">
					This information will be displayed publicly so be careful what you
					share.
				</p>
			</section>

			<div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="sm:col-span-3">
					<div className="grid grid-cols-2 gap-x-6 gap-y-4 ">
						<div className="sm:col-span-1">
							<Label htmlFor="firstName">firstName</Label>
							<Input
								id="firstName"
								type="text"
								value={firstName}
								autoComplete="name"
								className="mt-2"
							/>
						</div>

						<div className="sm:col-span-1">
							<Label htmlFor="lastName">lastName</Label>
							<Input
								id="lastName"
								name="lastName"
								type="text"
								autoComplete="family-name"
								value={lastName}
								className="mt-2"
							/>
						</div>

						<div className="sm:col-span-1">
							<Label htmlFor="phone">Phone</Label>
							<PhoneInput
								value={phone}
								type="tel"
								className="mt-2"
								id="phone"
								autoComplete="mobile tel"
								name="phone"
							/>
						</div>

						<div className="sm:col-span-1">
							<label
								htmlFor="Birthday"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Birthday
							</label>
							<div className="mt-2">
								<input
									id="Birthday"
									name="Birthday"
									type="date"
									autoComplete="bday-day"
									value={birthday.toLocaleDateString("fr-CA")}
									className="block bg-transparent  w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-1">
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
							>
								Email
							</label>
							<div className="mt-2">
								<input
									disabled
									id="email"
									name="email"
									type="email"
									value={email}
									autoComplete="address-level1"
									className="block bg-transparent  w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-1">
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
									value={city}
									autoComplete="address-level2"
									className="block bg-transparent  w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-1">
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
									value={province}
									autoComplete="address-level1"
									className="block bg-transparent w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
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
									value={address}
									className="block bg-transparent w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="col-span-3">
					<label
						htmlFor="cover-photo"
						className="block text-sm text-center font-medium leading-6 text-gray-900 dark:text-gray-200"
					>
						Cover photo
					</label>
					<div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-gray-200/25 ">
						{/* <div className="text-center fixed -z-10">
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
            </div> */}
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
