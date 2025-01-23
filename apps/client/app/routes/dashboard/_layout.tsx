import {
	type MetaFunction,
	Outlet,
	redirect,
	useLoaderData,
} from "react-router";
import { DashboardLoader } from "./loader";
import Navbar from "./navbar";

import { SidebarInset, SidebarProvider } from "@package/ui/components/sidebar";
import { getSession } from "~/.client/better-auth";

import { useEffect } from "react";
import { AppSidebar } from "./appSideBar";
import { DashboardMeta } from "./meta";

export const loader = DashboardLoader;
export const meta = DashboardMeta;



export default function DashboardLayout() {
	const { cookies } = useLoaderData<typeof loader>();

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
