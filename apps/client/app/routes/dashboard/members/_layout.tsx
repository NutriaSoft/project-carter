import { Button } from "@package/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";
import { MailPlus, UserPlus } from "lucide-react";
import { Outlet } from "react-router";

export default function MembersLayout() {
	return (
		<Card>
			<CardHeader className="flex flex-row">
				<div>
					<CardTitle className="text-xl">Teams</CardTitle>
					<CardDescription>Manage your teams and team members.</CardDescription>
				</div>

				<div className="flex gap-x-2 ml-auto">
					<Button variant="outline" className="capitalize">
						<span>invite user</span>
						<MailPlus />
					</Button>
					<Button className="capitalize">
						<span>add user</span>
						<UserPlus />
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Outlet />
			</CardContent>
		</Card>
	);
}
