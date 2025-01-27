import { Outlet } from "react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";

export default function ProjectsLayout() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Projects</CardTitle>
				<CardDescription>Manage your projects</CardDescription>
			</CardHeader>
			<CardContent>
				<Outlet />
			</CardContent>
		</Card>
	);
}
