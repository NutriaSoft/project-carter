import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BarsArrowUpIcon, UsersIcon } from "@heroicons/react/24/outline";
import { cn } from "@package/ui/utils";
import { NavLink, Outlet, useLocation } from "@remix-run/react";
import SectionNav from "./section-head";

/*
	! es de admitir que es la peor implementacion que se me ocurrio para manejar el enrutamiento del boton create
	? Refact Router: create btn
**/

export default function DashboardTeams() {
	const location = useLocation();

	return (
		<>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
						teams
					</h1>
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
							to={`${location.pathname}/create`.replace(
								/\/create\/create/,
								"/create",
							)}
							relative="route"
							type="button"
							caseSensitive
							className={({ isActive }) =>
								cn(
									"inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
									isActive
										? "ring ring-indigo-500 bg-indigo-400 touch-none "
										: "",
								)
							}
						>
							Create
						</NavLink>
					</div>
				</div>
			</header>
			<main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
				<SectionNav />
				<Outlet />
			</main>
		</>
	);
}
