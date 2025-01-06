import { Button } from "@package/ui/components/button";
import type { LoaderFunctionArgs } from "react-router";
import { type MetaFunction, Outlet, redirect } from "react-router";
import { authServer } from "~/utils/auh-server.server";
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
	const requestClone = request.clone();

	const authRequest = await authServer
		.headers({ ...requestClone.headers })
		.get("/get-session")
		.res();

	const mergedHeaders = new Headers([
		...requestClone.headers.entries(),
		...authRequest.headers.entries(),
	]);

	if (mergedHeaders.get("cookie")?.includes("better-auth")) return null;

	return redirect("/sing-in", {
		headers: mergedHeaders,
	});
}
