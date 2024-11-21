import type { LoaderFunctionArgs } from "@remix-run/node";
import { type MetaFunction, Outlet } from "@remix-run/react";
import { authenticator } from "~/utils/authenticator.server";
import { Navbar } from "./navbar";

export default function DashboardLayout() {
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

export async function loader({ request }: LoaderFunctionArgs) {
	// If the user is already authenticated redirect to /dashboard directly
	return await authenticator.isAuthenticated(request, {
		// successRedirect: "/dashboard",
		failureRedirect: "/sing-in",
	});
}
