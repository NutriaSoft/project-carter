// import { auth_client } from "~/utils/auth-client.server";

import type { ActionFunctionArgs } from "react-router";
import { Form } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
	console.log(request);
	// const { data, error } = await auth_client.sendVerificationEmail({
	// 	email: "nutriasoftteam@gmail.com",
	// 	callbackURL: "./",
	// });

	// console.log(data, error);

	return null;
}

export default function SingUp() {
	return (
		<div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-dvh">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Your Company"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Check your email imbox
				</h2>
				<Form method="post">
					<button type="submit">test</button>
				</Form>
			</div>
		</div>
	);
}
