import { faker } from "@faker-js/faker";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { useFetcher } from "react-router";
import type { InferInput } from "valibot";
import { authClient } from "~/.client/better-auth";
import CreateMemberAction from "./create-member.action";
import CreateProfileForm from "./create-profile-form";
import { CreateProfileMemberSchema } from "./create-profile-member.schema";

export const action = CreateMemberAction;

export default function Index() {
	const sex = faker.person.sexType();
	const firstName = faker.person.firstName(sex);
	const lastName = faker.person.lastName(sex);
	const email = faker.internet.email({ firstName, lastName });
	const phone = faker.phone.number({ style: "international" });
	const birthday = faker.date.between({ from: "2000-01-01", to: Date.now() });

	const fetcher = useFetcher();
	const form = useRemixForm<InferInput<typeof CreateProfileMemberSchema>>({
		fetcher,
		mode: "onSubmit",
		stringifyAllValues: false,
		resolver: valibotResolver(CreateProfileMemberSchema),
		submitHandlers: {
			async onValid(formValues) {
				const { error } = await authClient.admin.createUser({
					name: `${formValues.firstName} ${formValues.lastName}`,
					...formValues,
				});

				if (error) {
					alert({ error });
					return;
				}

				console.log();
			},
		},
		submitConfig: {
			action: "/sing-in",
			method: "POST",
		},
		defaultValues: {
			role: "user",
			password: "123123123",
			email,
			birthday,
			firstName,
			lastName,
			phone,
		},
	});

	return (
		<div className="pt-4">
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
					<CreateProfileForm form={form} />
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
		</div>
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
