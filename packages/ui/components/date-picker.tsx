"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@package/ui/components/button";
import { Calendar } from "@package/ui/components/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@package/ui/components/popover";
import { cn } from "@package/ui/lib/utils";

export function DatePickerDemo() {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[240px] justify-start text-left font-normal",
						!date && "text-muted-foreground",
					)}
				>
					<CalendarIcon />
					{date ? format(date, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
