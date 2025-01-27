import { SidebarTrigger } from "@package/ui/components/sidebar";
import { Separator } from "@package/ui/components/separator";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@package/ui/components/breadcrumb";
import { ThemeToggle } from "./theme-toogle.component";
import type { ComponentProps } from "react";
import { cn } from "@package/ui/lib/utils";

export interface NavbarProps {
	className?: string;
}

export default function Navbar({ className }: NavbarProps) {
	return (
		<header className={cn("flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12", className)}>
			<div className="flex w-full  items-center gap-2 px-4">
				<SidebarTrigger className="-ml-1" />
				<Separator orientation="vertical" className="mr-2 h-4" />
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className="hidden md:block">
							<BreadcrumbLink href="#">
								Building Your Application
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="hidden md:block" />
						<BreadcrumbItem>
							<BreadcrumbPage>Data Fetching</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<ThemeToggle className="size-8 ml-auto" />
			</div>
		</header>
	);
}
