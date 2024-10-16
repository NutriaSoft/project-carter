import { type MetaFunction, Outlet } from "@remix-run/react";
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
