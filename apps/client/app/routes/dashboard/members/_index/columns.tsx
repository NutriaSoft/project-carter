import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@package/ui/components/avatar";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@package/ui/components/hover-card";

import {
	CalendarIcon,
	HandRaisedIcon,
	PencilIcon,
	PhoneIcon,
	UserMinusIcon,
} from "@heroicons/react/20/solid";
import { Badge } from "@package/ui/components/badge";
import { Button } from "@package/ui/components/button";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import type { authClient } from "~/.client/better-auth";

export const columns: ColumnDef<typeof authClient.$Infer.Session.user>[] = [
	{
		accessorKey: "name",
		cell({ row }) {
			return (
				<section className="w-80 flex flex-row gap-x-4">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<h6 className="font-semibold capitalize text-base">
							{row.original.name}
						</h6>
						<p className="text-xs">{row.original.email}</p>
					</div>
				</section>
			);
		},
	},
	{
		accessorKey: "phone",
		header: "phone",
		cell({ row }) {
			return (
				<Button asChild variant="outline">
					<PhoneIcon />
					{row.original.phone}
					<a
						href={`tel:${row.original.phone}`}
						className="hover:underline cursor-pointer underline-offset-4"
					>
						<PhoneIcon />
						{row.original.phone}
					</a>
				</Button>
			);
		},
	},
	{
		accessorKey: "banned",
		header: "status",
		cell({ row }) {
			return (
				<section>
					{row.original.banned ? (
						<HoverCard>
							<HoverCardTrigger>
								<Badge
									variant="destructive"
									className="capitalize cursor-default"
								>
									banned
								</Badge>
							</HoverCardTrigger>
							<HoverCardContent className="flex flex-col gap-y-2">
								<div className="flex items-center">
									<HandRaisedIcon className="mr-2 h-4 w-4 opacity-70" />
									<div className="flex flex-col">
										<span className="text-xs font-semibold">Ban Reason</span>
										<p className="text-xs text-muted-foreground">
											{row.original.banReason}
										</p>
									</div>
								</div>
								<div className="flex items-center">
									<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
									<div className="flex flex-col">
										<span className="text-xs font-semibold">Expire in</span>
										<p className="text-xs text-muted-foreground">
											{row.original.banExpires
												? format(row.original.banExpires, "MM/dd/yyyy")
												: "forever"}
										</p>
									</div>
								</div>
							</HoverCardContent>
						</HoverCard>
					) : (
						<Badge variant="success" className="capitalize cursor-pointer">
							active
						</Badge>
					)}
				</section>
			);
		},
	},

	{
		accessorKey: "id",
		header: "options",
		cell({ row }) {
			return (
				<section className=" flex flex-row gap-x-4">
					<Button variant="outline" size="icon">
						<PencilIcon />
					</Button>
					<Button variant="outline" size="icon">
						<UserMinusIcon />
					</Button>
				</section>
			);
		},
	},
];
