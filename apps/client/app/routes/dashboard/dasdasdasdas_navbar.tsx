// import {
// 	Disclosure,
// 	DisclosureButton,
// 	DisclosurePanel,
// 	Menu,
// 	MenuButton,
// 	MenuItem,
// 	MenuItems,
// } from "@headlessui/react";
// import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { cn } from "@package/ui/lib/utils";
// import { NavLink, useNavigate } from "react-router";
// import type { NavLinkRenderProps } from "react-router";
// import { Theme, useTheme } from "remix-themes";
// import { authClient } from "~/utils/better-auth.client";

// const user = {
// 	name: "Tom Cook",
// 	email: "tom@example.com",
// 	imageUrl:
// 		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };

// const navigation = [
// 	// { name: "Dashboard", href: "./" },
// 	{ name: "team", href: "./teams" },
// 	{ name: "Projects", href: "./projects" },
// 	{ name: "Calendar", href: "./calendar" },
// 	{ name: "Reports", href: "./reports" },
// ];

// export function Navbar() {
// 	const [theme, setTheme] = useTheme();
// 	const navigate = useNavigate();
// 	const userNavigation = [
// 		{ name: "Your Profile", href: "#" },
// 		{ name: "Settings", href: "#" },
// 		{
// 			name: "Sign out",
// 			onclick: async () => {
// 				const { data, error } = await authClient.signOut();
// 				navigate("/sing-in");
// 				console.log("singOut", { data, error });
// 			},
// 		},
// 	];

// 	return (
// 		<Disclosure as="nav" className="bg-gray-800">
// 			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// 				<div className="flex h-16 items-center justify-between">
// 					<div className="flex items-center">
// 						<div className="flex-shrink-0">
// 							<img
// 								alt="Your Company"
// 								src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
// 								className="h-8 w-8"
// 							/>
// 						</div>
// 						<div className="hidden md:block">
// 							<div className="ml-10 flex items-baseline space-x-4">
// 								{navigation.map((item) => (
// 									<NavLink
// 										key={item.name}
// 										to={item.href}
// 										className={({ isActive }) =>
// 											cn(
// 												isActive
// 													? "bg-indigo-600 dark:bg-gray-900 text-white active"
// 													: "text-gray-300 hover:underline dark:hover:bg-gray-700 dark:hover:text-white",
// 												"rounded-md px-3 py-2 text-sm font-medium capitalize transition-colors",
// 											)
// 										}
// 									>
// 										{item.name}
// 									</NavLink>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 					<div className="hidden md:block">
// 						<div className="flex items-center gap-2">
// 							<button
// 								type="button"
// 								className="relative flex  rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// 								onClick={() =>
// 									setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
// 								}
// 							>
// 								<span className="sr-only">View notifications</span>
// 								<span className="absolute -inset-1.5" />

// 								<SunIcon className="  size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

// 								<MoonIcon
// 									aria-hidden="true"
// 									className="absolute  size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
// 								/>
// 							</button>
// 							<button
// 								type="button"
// 								className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// 							>
// 								<span className="absolute -inset-1.5" />
// 								<span className="sr-only">View notifications</span>
// 								<BellIcon aria-hidden="true" className="h-6 w-6" />
// 							</button>

// 							{/* Profile dropdown */}
// 							<Menu as="div" className="relative ">
// 								<div>
// 									<MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// 										<span className="absolute -inset-1.5" />
// 										<span className="sr-only">Open user menu</span>
// 										<img
// 											alt=""
// 											src={user.imageUrl}
// 											className="h-8 w-8 rounded-full"
// 										/>
// 									</MenuButton>
// 								</div>
// 								<MenuItems
// 									transition
// 									className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
// 								>
// 									{userNavigation.map((item) => (
// 										<MenuItem key={item.name}>
// 											<div>
// 												{item.onclick && (
// 													<button
// 														type="button"
// 														onClick={item.onclick}
// 														className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
// 													>
// 														{item.name}
// 													</button>
// 												)}

// 												{item.href && (
// 													<a
// 														href={item.href}
// 														className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
// 													>
// 														{item.name}
// 													</a>
// 												)}
// 											</div>
// 										</MenuItem>
// 									))}
// 								</MenuItems>
// 							</Menu>
// 						</div>
// 					</div>
// 					<div className="-mr-2 flex md:hidden">
// 						{/* Mobile menu button */}
// 						<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// 							<span className="absolute -inset-0.5" />
// 							<span className="sr-only">Open main menu</span>
// 							<Bars3Icon
// 								aria-hidden="true"
// 								className="block h-6 w-6 group-data-[open]:hidden"
// 							/>
// 							<XMarkIcon
// 								aria-hidden="true"
// 								className="hidden h-6 w-6 group-data-[open]:block"
// 							/>
// 						</DisclosureButton>
// 					</div>
// 				</div>
// 			</div>

// 			<DisclosurePanel className="md:hidden">
// 				<section className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
// 					{navigation.map((item) => (
// 						<DisclosureButton as="div" key={item.name}>
// 							<NavLink
// 								to={item.href}
// 								key={item.name}
// 								end
// 								className={({ isActive }: NavLinkRenderProps) =>
// 									cn(
// 										isActive
// 											? "bg-gray-900 text-white"
// 											: "text-gray-300 hover:bg-gray-700 hover:text-white",
// 										"block rounded-md px-3 py-2 text-base font-medium capitalize",
// 									)
// 								}
// 							>
// 								{item.name}
// 							</NavLink>
// 						</DisclosureButton>
// 					))}
// 				</section>
// 				<div className="border-t border-gray-700 pb-3 pt-4">
// 					<div className="flex items-center px-5">
// 						<div className="flex-shrink-0">
// 							<img
// 								alt=""
// 								src={user.imageUrl}
// 								className="h-10 w-10 rounded-full"
// 							/>
// 						</div>
// 						<div className="ml-3">
// 							<div className="text-base font-medium leading-none text-white">
// 								{user.name}
// 							</div>
// 							<div className="text-sm font-medium leading-none text-gray-400">
// 								{user.email}
// 							</div>
// 						</div>
// 						<button
// 							type="button"
// 							className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// 						>
// 							<span className="absolute -inset-1.5" />
// 							<span className="sr-only">View notifications</span>
// 							<BellIcon aria-hidden="true" className="h-6 w-6" />
// 						</button>
// 					</div>
// 					<div className="mt-3 space-y-1 px-2">
// 						{userNavigation.map((item) => {
// 							if (item.onclick) {
// 								return (
// 									<DisclosureButton
// 										key={item.name}
// 										as="button"
// 										type="button"
// 										onClick={item.onclick}
// 										className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
// 									>
// 										{item.name}
// 									</DisclosureButton>
// 								);
// 							}

// 							return (
// 								<DisclosureButton
// 									key={item.name}
// 									as="a"
// 									href={item.href}
// 									className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
// 								>
// 									{item.name}
// 								</DisclosureButton>
// 							);
// 						})}
// 					</div>
// 				</div>
// 			</DisclosurePanel>
// 		</Disclosure>
// 	);
// }
