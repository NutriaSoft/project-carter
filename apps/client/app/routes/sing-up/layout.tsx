import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";

import { Outlet } from "react-router";
export default function SingUpLayout() {
	return (
		<main className="p-4">
			<Card>
				<CardHeader className="">
					<CardTitle className="text-xl">Teams</CardTitle>
					<CardDescription>Manage your teams and team members.</CardDescription>
				</CardHeader>
				<CardContent>
					<Outlet />
				</CardContent>
			</Card>
		</main>
	);
}
