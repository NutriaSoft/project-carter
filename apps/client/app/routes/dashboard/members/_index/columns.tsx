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
import { authClient } from "~/.client/better-auth";

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
		header: "title",
		cell({ row }) {
			return (
				<section className="flex flex-col gap-x-4">
					<h6 className="font-semibold capitalize text-base">
						{row.original.role}
					</h6>
					<p className="text-xs">{row.original.email}</p>
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
		header: "create at",
		cell({ row }) {
			return (
				<span className="w-60 block">
					{format(row.original.createdAt, "Pp")}
				</span>
			);
		},
	},

	{
		accessorKey: "name",
		header: "update at",

		cell({ row }) {
			return (
				<span className="w-60 block">
					{format(row.original.updatedAt, "Pp")}
				</span>
			);
		},
	},

	{
		accessorKey: "id",
		header: "options",
		cell({ row }) {
			return (
				<section className=" flex flex-row gap-x-4">
					<Button
						variant="outline"
						size="icon"
						onClick={async () => {
							const { data, error } = await authClient.admin.unbanUser({
								userId: row.original.id,
							});

							console.log({ data, error });
						}}
					>
						<PencilIcon />
					</Button>
					<Button
						variant="outline"
						size="icon"
						onClick={async () => {
							const { data, error } = await authClient.admin.banUser({
								userId: row.original.id,
								banReason: "Spamming", // Optional (if not provided, the default ban reason will be used - No reason)
								banExpiresIn: 60 * 60 * 24 * 7, // Optional (if not provided, the ban will never expire)
							});

							console.log({ data, error });
						}}
					>
						<UserMinusIcon />
					</Button>
				</section>
			);
		},
	},
];
