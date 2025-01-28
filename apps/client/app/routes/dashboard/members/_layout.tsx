import { Button } from "@package/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@package/ui/components/dialog";
import { Input } from "@package/ui/components/input";
import { Label } from "@package/ui/components/label";
import { MailPlus, UserPlus, Copy, Send } from "lucide-react";
import { Outlet, Link } from "react-router";

export default function MembersLayout() {
	return (
		<Card>
			<CardHeader className="flex flex-row">
				<div>
					<CardTitle className="text-xl">Teams</CardTitle>
					<CardDescription>Manage your teams and team members.</CardDescription>
				</div>

				<div className="flex gap-x-2 ml-auto">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline" className="capitalize">
								<span>invite user</span>
								<MailPlus />
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-md">
							<DialogHeader>
								<DialogTitle className="inline-flex gap-x-2 items-center">
									<MailPlus />
									Share link
								</DialogTitle>
								<DialogDescription>
									Invite new user to join your team by sending them an email
									invitation. Assign a role to define their access level.
								</DialogDescription>
							</DialogHeader>
							<div className="flex items-center space-x-2">
								<div className="grid flex-1 gap-2">
									<Label htmlFor="link" className="sr-only">
										Link
									</Label>
									<Input
										id="link"
										defaultValue="https://ui.shadcn.com/docs/installation"
										readOnly
									/>
								</div>
								<Button type="submit" size="sm" className="px-3">
									<span className="sr-only">Copy</span>
									<Copy />
								</Button>
							</div>
							<DialogFooter className="sm:justify-start">
								<DialogClose asChild>
									<Button
										type="button"
										className="ml-auto capitalize"
										variant="secondary"
									>
										<Send />
										invite
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>

					<Button asChild className="capitalize">
						<Link to="./create">
							add user
							<UserPlus />
						</Link>
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Outlet />
			</CardContent>
		</Card>
	);
}
