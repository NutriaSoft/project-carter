import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@package/ui/components/sidebar";

import { useEffect, useState } from "react";
import { getSession } from "~/.client/better-auth";
// import { data } from "./data";
import { sidebarRoutes } from "./sidebar-routes";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import { ProjectRoutes } from "./project-routes";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const [userState, setUserState] = useState<
		Partial<Awaited<ReturnType<typeof getSession<never>>>["user"]>
	>({});

	useEffect(() => {
		(async () => {
			const { data, error } = await getSession();

			if (error || !data) {
				console.error(error);
			}

			if (data) setUserState(data.user);
			console.log({ data, error });
		})();
	}, []);

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
			<SidebarContent>
				<NavMain items={sidebarRoutes} />
				<NavProjects projects={ProjectRoutes} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={userState} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
