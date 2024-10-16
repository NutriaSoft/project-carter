import { Outlet } from "@remix-run/react";
import SectionNav from "./section-head";
export default function DashboardTeams() {
	return (
		<>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
						teams
					</h1>
				</div>
			</header>
			<main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<SectionNav />
				<Outlet />
			</main>
		</>
	);
}
