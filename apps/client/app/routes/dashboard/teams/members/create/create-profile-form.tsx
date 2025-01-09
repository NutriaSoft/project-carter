import { CalendarIcon } from "@heroicons/react/20/solid";
import { Button } from "@package/ui/components/button";
import { Calendar } from "@package/ui/components/calendar";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@package/ui/components/form";
import { Input } from "@package/ui/components/input";
import { PhoneInput } from "@package/ui/components/phone-input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@package/ui/components/popover";
import type { useRemixForm } from "@package/ui/hooks/use-remix-form";
import { cn } from "@package/ui/lib/utils";
import { format } from "date-fns";
import type { ReactNode } from "react";
import type { InferInput } from "valibot";
import type { CreateProfileMemberSchema } from "./create-profile-member.schema";

interface CreateProfileFormProps {
	form: ReturnType<
		typeof useRemixForm<InferInput<typeof CreateProfileMemberSchema>>
	>;
}

export default function CreateProfileForm({ form }: CreateProfileFormProps) {
	return (
		<>
			<div className="grid grid-cols-2 gap-x-6 gap-y-4 ">
				<div className="sm:col-span-1">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>firstName</FormLabel>
								<FormControl>
									<Input {...field} placeholder="example@domain.com" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="sm:col-span-1">
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>lastName</FormLabel>
								<FormControl>
									<Input {...field} placeholder="example@domain.com" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="sm:col-span-1">
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<PhoneInput {...field} type="tel" autoComplete="mobile tel" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="sm:col-span-1">
					<FormField
						control={form.control}
						name="birthday"
						render={({ field }) => (
							<FormItem>
								<FormLabel>birthday</FormLabel>
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
									<PopoverContent className="w-auto p-0" align="start">
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
				</div>

				<div className="sm:col-span-1">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="email"
										placeholder="example@domain.com"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</div>
		</>
	);
}
