import { valibotResolver } from "@hookform/resolvers/valibot";
import { Calendar } from "@package/ui/components/LF-calendar";
import { Button } from "@package/ui/components/button";
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
import { PhoneInput } from "@package/ui/components/phone-input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@package/ui/components/popover";
import { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { cn } from "@package/ui/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, ListRestart, Send } from "lucide-react";
import { Form, useLoaderData } from "react-router";
import type { InferInput } from "valibot";
import { signUp } from "~/.client/better-auth";
import type { Route } from "./+types/route";
import { SingUpIndexClientFallback } from "./hydratefallback";
import { SingUpIndexClientLoader } from "./loader.client";
import { SingUpSchema } from "./sing-up.schema";

export function HydrateFallback() {
	return <SingUpIndexClientFallback />;
}

export async function clientLoader(loaderArgs: Route.ClientLoaderArgs) {
	return await SingUpIndexClientLoader(loaderArgs);
}

clientLoader.hydrate = true;

export default function SingUpIndex() {
	const loaderData = useLoaderData<typeof clientLoader>();
	const form = useRemixForm<InferInput<typeof SingUpSchema>>({
		mode: "onSubmit",
		resolver: valibotResolver(SingUpSchema),
		submitHandlers: {
			async onValid(formValues) {
				const { error } = await signUp.email({
					name: formValues.email,
					...formValues,
				});

				if (error) {
					console.log({ ...error });
					return;
				}

				console.log();
			},
		},
		defaultValues: {
			email: loaderData?.user.email,
		},
	});

	return (
		<section>
			<FormProvider {...form}>
				<Form onSubmit={form.handleSubmit} className="space-y-4">
					<main className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
						<FormField
							name="firstName"
							control={form.control}
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
							name="lastName"
							control={form.control}
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
							disabled
							name="email"
							control={form.control}
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
