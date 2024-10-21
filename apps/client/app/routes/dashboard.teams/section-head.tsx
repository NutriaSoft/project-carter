import { cn } from "@package/ui/utils";
import { NavLink } from "@remix-run/react";

const tabs = [
	{ name: "List", href: "../teams" },
	{ name: "Members", href: "./members/" },
	{ name: "Administration", href: "../administration/", current: true },
	// { name: "Offer", href: "#" },
	// { name: "Hired", href: "#" },
];

export default function Index() {
	return (
		<div className="relative border-b border-gray-200 pb-5 sm:pb-0">
			{/* <div className="md:flex md:items-center md:justify-between">
				<h3 className="text-base font-semibold leading-6 text-gray-900">
					Candidates
				</h3>

				<div className="flex gap-3 md:">
					<div className="flex rounded-md shadow-sm w-full">
						<div className="relative flex flex-grow items-stretch focus-within:z-10">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<UsersIcon
									aria-hidden="true"
									className="h-5 w-5 text-gray-400"
								/>
							</div>
							<input
								id="search-team-input"
								name="search-user"
								type="search"
								placeholder="John Smith"
								className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<Menu as="div" className="relative">
							<MenuButton>
								<button
									type="button"
									className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									<BarsArrowUpIcon
										aria-hidden="true"
										className="-ml-0.5 h-5 w-5 text-gray-400"
									/>
									Sort
								</button>
							</MenuButton>
							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
							>
								<MenuItem>
									<div className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
										item
									</div>
								</MenuItem>
								<MenuItem>
									<div className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
										item
									</div>
								</MenuItem>
								<MenuItem>
									<div className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
										item
									</div>
								</MenuItem>
							</MenuItems>
						</Menu>
					</div>
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
								isActive ? "ring ring-indigo-500" : "",
								"inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
							)
						}
					>
						Create
					</NavLink>
				</div>
			</div> */}
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
