import { CalendarIcon } from "@heroicons/react/20/solid";
import { valibotResolver } from "@hookform/resolvers/valibot";
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
	FormDescription,
	Form as FormProvider,
} from "@package/ui/components/form";
import { Input } from "@package/ui/components/input";
import { Label } from "@package/ui/components/label";
import { PhoneInput } from "@package/ui/components/phone-input";
import { Button } from "@package/ui/components/button";
import { Calendar } from "@package/ui/components/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@package/ui/components/popover";
import { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { cn } from "@package/ui/lib/utils";
import { format } from "date-fns";
import { Form, useFetcher, Link } from "react-router";
import type { InferInput } from "valibot";
import { authClient } from "~/utils/better-auth.client";
import { ThemeToggle } from "./theme-toogle.component";

import SingUpAction from "./sing-up.action";

import { SingUpSchema } from "./sing-up.schema";

export const action = SingUpAction;

export default function SingUp() {
	// const fetcher = useFetcher();
	const form = useRemixForm<InferInput<typeof SingUpSchema>>({
		// fetcher,
		mode: "onSubmit",
		stringifyAllValues: false,
		resolver: valibotResolver(SingUpSchema),
		submitHandlers: {
			async onValid(formValues) {
				console.log(formValues);

				// const { data, error } = await authClient.signUp.email({
				// 	name: `${formValues.firstName} ${formValues.lastName}`,
				// 	...formValues,
				// });

				// if (error) {
				// 	alert({ error });
				// 	return;
				// }

				// console.log(data);
			},
		},
		submitConfig: {
			action: "/sing-up",
			method: "POST",
		},
		defaultValues: {
			password: "0123456789",
			email: "user@example.com",
			// birthday: new Date("2000-01-01"),
			firstName: "first name",
			lastName: "last name",
			phone: "+593987469359",
		},
	});

	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-6">
			<ThemeToggle className="absolute top-4 right-4" />
			<div className="w-full max-w-sm">
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
								method="POST"
								// onSubmit={form.handleSubmit}
								className="space-y-4 flex flex-col items-start"
							>
								<button type="submit">SUMBIT</button>

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
															type="button"
															variant={"outline"}
															className={cn(
																"w-full pl-3 text-left font-normal",
																!field.value && "text-muted-foreground",
															)}
														>
															{field.value ? (
																format(field.value, "PPP")
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
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) =>
															date > new Date() || date < new Date("1900-01-01")
														}
														initialFocus
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
								<Button type="submit" className="w-full">
									Login
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
			</div>
		</div>
	);
}

/*
 */
