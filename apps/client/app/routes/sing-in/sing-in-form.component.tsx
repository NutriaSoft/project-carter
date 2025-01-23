import { valibotResolver } from "@hookform/resolvers/valibot";
import { Button } from "@package/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form as FormProvider,
} from "@package/ui/components/form";
import { Input } from "@package/ui/components/input";
import { Label } from "@package/ui/components/label";
import { Spinner } from "@package/ui/components/spinner";
import { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { cn } from "@package/ui/lib/utils";
import type { Prettify } from "better-auth/types";
import { type ComponentPropsWithoutRef, useState } from "react";
import { Form, Link, useFetcher, useNavigate } from "react-router";
import { toast } from "sonner";
import type { InferInput } from "valibot";
import { authClient, signIn } from "~/.client/better-auth";
import { SingInSchema } from "./sing-in.schema";

type SingInData = Awaited<ReturnType<typeof signIn.email<never>>>["user"];

type SingInError = {
	code?: string;
	message?: string;
	status: number;
	statusText: string;
};

const toastPromise = ({ email, password }: InferInput<typeof SingInSchema>) => {
	return new Promise(
		(
			resolve: (value: SingInData | null) => void,
			reject: (value: SingInError | null) => void,
		) => {
			setTimeout(async () => {
				const { data, error } = await signIn.email({ email, password });
				error ? resolve(data) : reject(error);
			}, 2000);
		},
	);
};

export function SingInForm({
	className,
	...props
}: ComponentPropsWithoutRef<"div">) {
	const [formDisable, setFormDisable] = useState(false);

	// const fetcher = useFetcher();
	const navigate = useNavigate();
	const form = useRemixForm<InferInput<typeof SingInSchema>>({
		// fetcher,
		disabled: formDisable,
		mode: "onSubmit",
		stringifyAllValues: false,
		resolver: valibotResolver(SingInSchema),
		submitHandlers: {
			async onValid({ email, password }) {
				setFormDisable(true);
				toast.promise(toastPromise({ email, password }), {
					loading: "Loading...",
					success(user) { 
						navigate("./success");
						return `Created user with email ${user?.email}`;
					},
					error: (error) => `${error.message}`,
					finally: () => setFormDisable(false),
				});
				// if (error) {
				// 	alert({ error });
				// 	return;
				// }
				// navigate("/dashboard");
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
									{formDisable ? <Spinner className="invert" /> : "Sing Ip"}
								</Button>
								<Button variant="outline" className="w-full">
									Login with Google
								</Button>
							</div>
							<div className="mt-4 text-center text-sm">
								Don&apos;t have an account?{" "}
								<Link to="/sing-up" className="underline underline-offset-4">
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
