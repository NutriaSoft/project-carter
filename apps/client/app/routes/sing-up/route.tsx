import { faker } from "@faker-js/faker";
import {
	CalendarIcon,
	EnvelopeIcon,
	ExclamationCircleIcon,
	ExclamationTriangleIcon,
	UsersIcon,
} from "@heroicons/react/20/solid";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { client } from "@package/auth/src/client";
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
import { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { cn } from "@package/ui/lib/utils";
import { format } from "date-fns";
import { Form, useActionData, useFetcher } from "react-router";
import type { InferInput } from "valibot";
import CreateMemberAction from "~/routes/dashboard/teams/members/create/create-member.action";
import { CreateProfileMemberSchema } from "~/routes/dashboard/teams/members/create/create-profile-member.schema";
import { authClient } from "~/utils/better-auth.client";
import { ThemeToggle } from "./theme-toogle.component";

export const action = CreateMemberAction;

export default function SingUp() {
	const fetcher = useFetcher();
	const form = useRemixForm<InferInput<typeof CreateProfileMemberSchema>>({
		fetcher,
		mode: "onSubmit",
		stringifyAllValues: false,
		resolver: valibotResolver(CreateProfileMemberSchema),
		submitHandlers: {
			async onValid(formValues) {
				const { error } = await authClient.signUp.email({
					name: `${formValues.firstName} ${formValues.lastName}`,
					...formValues,
				});

				if (error) {
					alert({ error });
					return;
				}

				console.log();
			},
		},
		submitConfig: {
			action: "/sing-in",
			method: "POST",
		},
		defaultValues: {
			password: "admin123",
			email: "admin@example.com",
			// birthday,
			// firstName,
			// lastName,
			// phone,
		},
	});

	// const serverAction = useActionData<typeof action>();

	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-6">
			<ThemeToggle className="absolute top-4 right-4" />
			<div className="w-full max-w-sm">
				<Popover>
					<PopoverTrigger>Open</PopoverTrigger>
					<PopoverContent>Place content for the popover here.</PopoverContent>
				</Popover>

				<Card className="mx-auto max-w-sm rounded-xl">
					<CardHeader className="pb-0">
						<CardTitle className="text-2xl">Register</CardTitle>
						<CardDescription>
							Create a new account by filling out the form below.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<FormProvider {...form}>
							<Form
								action="/sing-up"
								method="POST"
								onSubmit={form.handleSubmit}
								className="space-y-4"
							>
								<FormField
									name="email"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<Label className="capitalize" htmlFor={field.name}>
													email
												</Label>
											</FormLabel>
											<FormControl>
												<Input {...field} type="email" required />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="password"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<Label className="capitalize" htmlFor={field.name}>
													Password
												</Label>
											</FormLabel>
											<FormControl>
												<Input {...field} type="password" required />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="firstName"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<Label className="capitalize" htmlFor={field.name}>
													first name
												</Label>
											</FormLabel>
											<FormControl>
												<Input {...field} type="text" required />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="lastName"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<Label className="capitalize" htmlFor={field.name}>
													last name
												</Label>
											</FormLabel>
											<FormControl>
												<Input {...field} type="text" required />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem className="flex flex-col items-start">
											<FormLabel className="capitalize" htmlFor={field.name}>
												Phone Number
											</FormLabel>
											<FormControl className="w-full">
												<PhoneInput
													className="text-white"
													placeholder="Enter a phone number"
													type="tel"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</Form>
						</FormProvider>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

/* 
<FormField
									control={form.control}
									name="birthday"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<Label htmlFor={field.name}>Password</Label>
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"w-[240px] pl-3 text-left font-normal",
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
												<PopoverContent className="w-auto p-0 bg-current" align="start">
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
										</FormItem>
									)}
								/>
								 */
