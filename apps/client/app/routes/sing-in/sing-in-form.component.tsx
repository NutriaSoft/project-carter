import { valibotResolver } from "@hookform/resolvers/valibot";
import { Button } from "@package/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";
import { Input } from "@package/ui/components/input";
import { Label } from "@package/ui/components/label";
import { cn } from "@package/ui/lib/utils";
import { useRemixForm } from "@package/ui/src/hooks/use-remix-form";
import { Form, Link, useFetcher } from "react-router";
import type { InferInput } from "valibot";
import { SingInSchema } from "./sing-in.schema";

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form as FormProvider,
} from "@package/ui/components/form";
import type { ComponentPropsWithoutRef } from "react";
import { authClient } from "~/utils/better-auth.client";

export function SingInForm({
	className,
	...props
}: ComponentPropsWithoutRef<"div">) {
	const fetcher = useFetcher();

	const form = useRemixForm<InferInput<typeof SingInSchema>>({
		fetcher,
		mode: "onSubmit",
		stringifyAllValues: false,
		resolver: valibotResolver(SingInSchema),

		submitHandlers: {
			async onValid({ email, password }) {
				console.log({ email, password });

				const { data: authClientData, error: authClientError } =
					await authClient.signIn.email({
						email,
						password,
					});

				console.log({ data: authClientData, error: authClientError });
			},
		},
		submitConfig: {
			action: "/sing-in",
			method: "POST",
		},
		defaultValues: {
			email: "admin@example.com",
			password: "123123123",
		},
	});

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<FormProvider {...form}>
						<Form
							action="/sing-in"
							method="POST"
							onSubmit={form.handleSubmit}
							className="space-y-4"
						>
							<div className="flex flex-col gap-6">
								<div className="grid gap-2">
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
												<FormControl>
													<Input {...field} placeholder="example@domain.com" />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="grid gap-2">
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													<div className="flex items-center">
														<Label htmlFor="password">Password</Label>
														<Link
															to=".."
															className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
														>
															Forgot your password?
														</Link>
													</div>
												</FormLabel>
												<FormControl>
													<Input {...field} type="password" required />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<Button type="submit" className="w-full">
									Login
								</Button>
								<Button variant="outline" className="w-full">
									Login with Google
								</Button>
							</div>
							<div className="mt-4 text-center text-sm">
								Don&apos;t have an account?{" "}
								<Link to=".." className="underline underline-offset-4">
									Sign up
								</Link>
							</div>
						</Form>
					</FormProvider>
				</CardContent>
			</Card>
		</div>
	);
}
