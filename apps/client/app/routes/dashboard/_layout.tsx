import {
	type MetaFunction,
	Outlet,
	redirect,
	useLoaderData,
} from "react-router";
import { DashboardLoader } from "./loader";
import Navbar from "./navbar";

import { SidebarInset, SidebarProvider } from "@package/ui/components/sidebar";

import { AppSidebar } from "./appSideBar";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader = DashboardLoader;

export default function DashboardLayout() {
	const { cookies } = useLoaderData<typeof loader>();
	// const cookieStore = await cookies()
	// const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

	return (
		<SidebarProvider defaultOpen={Boolean(cookies["sidebar:state"]) ?? true}>
			<AppSidebar />
			<SidebarInset>
				<Navbar />
				<main className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
