import { CalendarIcon } from "@heroicons/react/20/solid";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Button } from "@package/ui/components/button";
import { Calendar } from "@package/ui/components/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form as FormProvider,
} from "@package/ui/components/form";
import { Input } from "@package/ui/components/input";
import { Label } from "@package/ui/components/label";
import { PhoneInput } from "@package/ui/components/phone-input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@package/ui/components/popover";
import { Spinner } from "@package/ui/components/spinner";
import { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { cn } from "@package/ui/lib/utils";
import { format } from "date-fns";
import { Form, Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "sonner";
import type { InferInput } from "valibot";
import { signUp } from "~/.client/better-auth";
import SingUpAction from "./action.server";
import { SingUpSchema } from "./sing-up.schema";
import { ThemeToggle } from "./theme-toogle.component";

import { useState } from "react";
import { SingUpIndexClientFallback } from "./hydratefallback";
import { SingUpIndexClientLoader } from "./loader.client";

export const HydrateFallback = SingUpIndexClientFallback;
export const clientLoader = SingUpIndexClientLoader;
export const action = SingUpAction;

export default function SingUp() {
	const navigate = useNavigate();
	const loaderData = useLoaderData<typeof clientLoader>();
	const [formDisable, setFormDisable] = useState(false);

	const form = useRemixForm<InferInput<typeof SingUpSchema>>({
		disabled: formDisable,
		mode: "onSubmit",
		resolver: valibotResolver(SingUpSchema),
		submitHandlers: {
			onValid(formValues) {
				setFormDisable(true);
				toast.promise(
					new Promise(
						(
							resolve: (
								value: Awaited<ReturnType<typeof signUp.email<never>>>,
							) => void,
							errResolver,
						) => {
							setTimeout(async () => {
								const { data, error } = await signUp.email({
									name: formValues.email,
									...formValues,
								});
								error ? errResolver(error) : resolve(data);
							}, 2000);
						},
					),
					{
						loading: "Loading...",
						success: ({ user }) => {
							navigate("./success");
							return `Created user with email ${user.email}`;
						},
						error: (error) => `${error.message}`,
						finally: () => setFormDisable(false),
					},
				);
			},
		},
		defaultValues: {
			email: loaderData?.user.email ?? "",

			// password: "0123456789",
			// email: "user@example.com",
			// birthday: new Date("2000-05-04"),
			// firstName: "first name",
			// lastName: "last name",
			// phone: "+593987469359",
		},
	});

	return (
		<main className="flex min-h-svh w-full items-center justify-center p-6 md:p-6">
			<ThemeToggle className="fixed top-4 right-4" />
			{/* <div className="w-full ">
				<Card className="mx-auto max-w-sm">
					<CardHeader>
						<CardTitle className="text-2xl">Register</CardTitle>
						<CardDescription>
							Create a new account by filling out the form below.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<FormProvider {...form}>
							<Form
								onSubmit={form.handleSubmit}
								className="space-y-4 flex flex-col items-start"
							>
								{authClientError && (
									<Alert variant="destructive">
										<XCircleIcon className="h-4 w-4" />
										<AlertTitle>Error</AlertTitle>
										<AlertDescription>
											we cannot establish connection.Please log in again.
										</AlertDescription>
									</Alert>
								)}

								<FormField
									name="firstName"
									control={form.control}
									render={({ field }) => (
										<FormItem className="flex flex-col items-start w-full">
											<FormLabel>
												<Label className="capitalize" htmlFor={field.name}>
													first name
												</Label>
											</FormLabel>
											<FormControl className="w-full">
												<Input {...field} type="text" required />
											</FormControl>
											<FormDescription className="text-left">
												Enter your first name
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="lastName"
									control={form.control}
									render={({ field }) => (
										<FormItem className="flex flex-col items-start w-full">
											<FormLabel>
												<Label className="capitalize" htmlFor={field.name}>
													last name
												</Label>
											</FormLabel>
											<FormControl className="w-full">
												<Input {...field} type="text" required />
											</FormControl>
											<FormDescription className="text-left">
												Enter your last name
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="email"
									control={form.control}
									render={({ field }) => (
										<FormItem className="flex flex-col items-start w-full">
											<FormLabel>
												<Label className="capitalize" htmlFor={field.name}>
													email
												</Label>
											</FormLabel>
											<FormControl className="w-full">
												<Input {...field} type="email" required />
											</FormControl>
											<FormDescription className="text-left">
												Enter your email address
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="password"
									control={form.control}
									render={({ field }) => (
										<FormItem className="flex flex-col items-start w-full">
											<FormLabel>
												<Label className="capitalize" htmlFor={field.name}>
													Password
												</Label>
											</FormLabel>
											<FormControl className="w-full">
												<Input {...field} type="password" required />
											</FormControl>
											<FormDescription className="text-left">
												Enter your security password
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem className="flex flex-col items-start w-full">
											<FormLabel className="text-left">Phone Number</FormLabel>
											<FormControl>
												<PhoneInput
													className="w-full"
													placeholder="Enter a phone number"
													{...field}
												/>
											</FormControl>
											<FormDescription className="text-left">
												Enter a phone number
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="birthday"
									render={({ field }) => (
										<FormItem className="flex flex-col items-start w-full">
											<FormLabel>
												<Label htmlFor={field.name}>Birthday</Label>
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															disabled={field.disabled}
															type="button"
															variant={"outline"}
															className={cn(
																"w-full pl-3 text-left font-normal",
																!field.value && "text-muted-foreground",
															)}
														>
															{field.value ? (
																format(field.value, "dd/MM/yyyy")
															) : (
																<span>Pick a date</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className="w-auto p-0 " align="start">
													<Calendar
														mode="single"
														captionLayout="dropdown"
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) =>
															date > new Date() || date < new Date("1900-01-01")
														}
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
											<FormDescription className="text-left">
												Pick your birthday date
											</FormDescription>
										</FormItem>
									)}
								/>

								<Button disabled={formDisable} type="submit" className="w-full">
									{formDisable ? <Spinner className="invert" /> : "Sing Up"}
								</Button>
								<Button variant="outline" className="w-full">
									Login with Google
								</Button>
								<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
									By clicking continue, you agree to our{" "}
									<Link to="#">Terms of Service</Link> and{" "}
									<Link to="#">Privacy Policy</Link>.
								</div>
								<div className="mt-4 mx-auto text-center text-sm">
									Don&apos;t have an account?{" "}
									<Link to="/sing-up" className="underline underline-offset-4">
										Sign up
									</Link>
								</div>
							</Form>
						</FormProvider>
					</CardContent>
				</Card>
			</div> */}
		</main>
	);
}

/*
 */
