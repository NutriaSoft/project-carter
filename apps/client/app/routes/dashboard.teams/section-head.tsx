import { cn } from "@package/ui/utils";
import { NavLink } from "@remix-run/react";

const tabs = [
	{ name: "List", href: "../teams" },
	{ name: "Developers", href: "../developers/" },
	{ name: "Administration", href: "../administration/", current: true },
	// { name: "Offer", href: "#" },
	// { name: "Hired", href: "#" },
];

export default function Index() {
	return (
		<div className="relative border-b border-gray-200 pb-5 sm:pb-0">
			<div className="md:flex md:items-center md:justify-between">
				<h3 className="text-base font-semibold leading-6 text-gray-900">
					Candidates
				</h3>
				<div className="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
					<button
						type="button"
						className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						Share
					</button>
					<NavLink
						end
						caseSensitive
						to="./create"
						relative="path"
						type="button"
						className={({ isActive }) =>
							cn(
								isActive ? "ring ring-indigo-500":"",
								"ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
							)
						}
					>
						Create
					</NavLink>
				</div>
			</div>
			<div className="mt-4">
				<div className="sm:hidden">
					<label htmlFor="current-tab" className="sr-only">
						Select a tab
					</label>
					<select
						id="current-tab"
						name="current-tab"
						className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
					>
						{tabs.map((tab) => (
							<option key={tab.name}>{tab.name}</option>
						))}
					</select>
				</div>
				<div className="hidden sm:block">
					<nav className="-mb-px flex space-x-8">
						{tabs.map((tab) => (
							<NavLink
								key={tab.name}
								to={tab.href}
								relative="path"
								end
								caseSensitive
								className={({ isActive }) =>
									cn(
										isActive
											? "border-indigo-500 text-indigo-600"
											: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
										"whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium",
									)
								}
							>
								{tab.name}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
}
