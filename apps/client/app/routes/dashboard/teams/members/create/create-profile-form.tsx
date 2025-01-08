import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@package/ui/components/form";
import { Input } from "@package/ui/components/input";
import type { useRemixForm } from "@package/ui/hooks/use-remix-form";
import type { ReactNode } from "react";
import type { InferInput } from "valibot";
import type { CreateProfileMemberSchema } from "./create-profile-member.schema";

interface CreateProfileFormProps {
	form: ReturnType<
		typeof useRemixForm<InferInput<typeof CreateProfileMemberSchema>>
	>;
	children: ReactNode;
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
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input {...field} placeholder="example@domain.com" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{/* <div className="sm:col-span-1">
					<Label htmlFor="lastName">lastName</Label>
					<Input
						id="lastName"
						name="lastName"
						type="text"
						autoComplete="family-name"
						value={lastName}
						className="mt-2"
					/>
				</div>

				<div className="sm:col-span-1">
					<Label htmlFor="phone">Phone</Label>
					<PhoneInput
						value={phone}
						type="tel"
						className="mt-2"
						id="phone"
						autoComplete="mobile tel"
						name="phone"
					/>
				</div>

				<div className="sm:col-span-1">
					<label
						htmlFor="Birthday"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
					>
						Birthday
					</label>
					<div className="mt-2">
						<input
							id="Birthday"
							name="Birthday"
							type="date"
							autoComplete="bday-day"
							value={birthday.toLocaleDateString("fr-CA")}
							className="block bg-transparent  w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-1">
					<label
						htmlFor="email"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
					>
						Email
					</label>
					<div className="mt-2">
						<input
							disabled
							id="email"
							name="email"
							type="email"
							value={email}
							autoComplete="address-level1"
							className="block bg-transparent  w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-1">
					<label
						htmlFor="city"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
					>
						City
					</label>
					<div className="mt-2">
						<input
							id="city"
							name="city"
							type="text"
							value={city}
							autoComplete="address-level2"
							className="block bg-transparent  w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-1">
					<label
						htmlFor="region"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
					>
						State / Province
					</label>
					<div className="mt-2">
						<input
							id="region"
							name="region"
							type="text"
							value={province}
							autoComplete="address-level1"
							className="block bg-transparent w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="street-address"
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
					>
						Street address
					</label>
					<div className="mt-2">
						<input
							id="street-address"
							name="street-address"
							type="text"
							autoComplete="street-address"
							value={address}
							className="block bg-transparent w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div> */}
			</div>
		</>
	);
}
