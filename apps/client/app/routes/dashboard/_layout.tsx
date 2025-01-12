import { Button } from "@package/ui/components/button";
import type { LoaderFunctionArgs } from "react-router";
import { type MetaFunction, Outlet, redirect } from "react-router";
import { authServer } from "~/utils/auh-server.server";
import { DashboardLoader } from "./loader";
import { Navbar } from "./navbar";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader = DashboardLoader;

export default function DashboardLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
