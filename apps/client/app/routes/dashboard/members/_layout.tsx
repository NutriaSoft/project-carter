import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";
import { Outlet } from "react-router";

export default function MembersLayout() {
	return (
		<Card>
			<CardHeader className="flex flex-row">
				<div>
					<CardTitle>Teams</CardTitle>
					<CardDescription>Manage your teams and team members.</CardDescription>
				</div>

				<div>
					<CardTitle>Teams</CardTitle>
					<CardDescription>Manage your teams and team members.</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<Outlet />
			</CardContent>
		</Card>
	);
}
