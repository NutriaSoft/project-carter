import { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { CreateMemberAction } from "./action";
import { CreateMemberSchema } from "./create.schema";
import { authClient } from "~/.client/better-auth";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { date, type InferInput } from "valibot";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormDescription,
	Form as FormProvider,
} from "@package/ui/components/form";
import { Form } from "react-router";
import { Input } from "@package/ui/components/input";
import { Button } from "@package/ui/components/button";
import { Send, ListRestart, CalendarIcon } from "lucide-react";
import { PhoneInput } from "@package/ui/components/phone-input";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@package/ui/components/select";
import { Calendar } from "@package/ui/components/LF-calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@package/ui/components/popover";
import { cn } from "@package/ui/lib/utils";
import { format } from "date-fns";
import React from "react";

export default function MembersCreateIndex() {
	const form = useRemixForm<InferInput<typeof CreateMemberSchema>>({
		mode: "onSubmit",
		stringifyAllValues: false,
		resolver: valibotResolver(CreateMemberSchema),
		submitHandlers: {
			async onValid(formValues) {
				const { error } = await authClient.admin.createUser({
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
		defaultValues: {
			role: "user",
		},
	});

	return (
		<section>
			<FormProvider {...form}>
				<Form onSubmit={form.handleSubmit} className="space-y-4">
					<main className="grid gap-2 grid-cols-3">
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Role</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue
													className="capitalize"
													placeholder="user role"
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="admin" className="capitalize">
												Admin
											</SelectItem>
											<SelectItem value="user" className="capitalize">
												User
											</SelectItem>
										</SelectContent>
									</Select>
									<FormDescription>
										You can manage role addresses in your
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Jhon Alexander" />
									</FormControl>
									<FormDescription>
										You can manage role addresses in your
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Martinez Di'Martino" />
									</FormControl>
									<FormDescription>
										You can manage role addresses in your
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="birthday"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Birthday</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													disabled={field.disabled}
													type="button"
													size="sm"
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
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date > new Date() || date < new Date("1900-01-01")
												}
											/>
										</PopoverContent>
									</Popover>
									<FormDescription>
										You can manage role addresses in your
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<PhoneInput placeholder="Enter a phone number" {...field} />
									</FormControl>
									<FormDescription>Enter a phone number</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} placeholder="example@domain.com" />
									</FormControl>
									<FormDescription>
										You can manage role addresses in your
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</main>
					<footer className=" justify-end flex gap-x-2">
						<Button variant="outline" type="reset" className="capitalize">
							<ListRestart />
							reset
						</Button>
						<Button type="submit" className="capitalize">
							<Send />
							submit
						</Button>
					</footer>
				</Form>
			</FormProvider>
		</section>
	);
}
