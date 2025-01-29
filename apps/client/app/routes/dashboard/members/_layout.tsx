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

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form as FormProvider,
} from "@package/ui/components/form";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { Button } from "@package/ui/components/button";
import { Input } from "@package/ui/components/input";
import { Label } from "@package/ui/components/label";
import { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { Copy, MailPlus, Send, UserPlus } from "lucide-react";
import { Form } from "react-router";

import { Link, Outlet } from "react-router";
import * as v from "valibot";
import { authClient } from "~/.client/better-auth";

const InviteUserSchema = v.object({
	email: v.pipe(
		v.string("Your email must be a string."),
		v.nonEmpty("Please enter your email."),
		v.email("The email address is badly formatted."),
	),
});

export default function MembersLayout() {
	const form = useRemixForm<v.InferInput<typeof InviteUserSchema>>({
		mode: "onSubmit",
		resolver: valibotResolver(InviteUserSchema),
		submitHandlers: {
			async onValid({ email }) {
				console.log({ email });
				console.log(window.origin);
				const { data, error } = await authClient.signIn.magicLink({
					email,
					callbackURL: `${window.origin}/sing-up`,
				});

				if (error) {
					console.log({ ...error });
					return;
				}

				console.log({ data });
			},
		},
		defaultValues: {
			email: "yigs@example.com",
		},
	});

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
							<Button type="button" variant="outline" className="capitalize">
								<span>invite user</span>
								<MailPlus />
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-md">
							<FormProvider {...form}>
								<Form onSubmit={form.handleSubmit} className="space-y-4">
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
											<FormField
												control={form.control}
												name="email"
												render={({ field }) => (
													<FormItem>
														<FormLabel className="sr-only">Email</FormLabel>
														<FormControl>
															<Input
																{...field}
																placeholder="example@domain.com"
															/>
														</FormControl>
														<FormDescription>
															You can manage email addresses in your
														</FormDescription>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
									</div>
									<DialogFooter className="sm:justify-start">
										<DialogClose asChild>
											<Button
												type="submit"
												className="ml-auto capitalize"
												variant="secondary"
											>
												<Send />
												invite
											</Button>
										</DialogClose>
									</DialogFooter>
								</Form>
							</FormProvider>
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
