import { type LoaderFunctionArgs, redirect } from "@remix-run/node";
import {
	type MetaFunction,
	Outlet,
	// useLoaderData,
} from "@remix-run/react";
import { authenticator } from "~/utils/authenticator.server";
import { Navbar } from "./navbar";
import { authClient } from "@package/auth";

export default function DashboardLayout() {
	// const data = useLoaderData();
	// console.log(data);

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

const setHeaderServer = (request: Request) => {
	return {
		headers: {
			"Set-Cookie": request.headers.get("set-cookie") ?? "",
			cookie: request.headers.get("cookie") ?? "",
		},
	};
};

export async function loader({ request }: LoaderFunctionArgs) {
	const { error } = await authClient.getSession({
		fetchOptions: {
			...setHeaderServer(request),
		},
	});

	if (error) {
		return redirect("/sing-in");
	}
	// If the user is already authenticated redirect to /dashboard directly
	return null;
}
