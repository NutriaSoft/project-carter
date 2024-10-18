import {
	ClipboardDocumentListIcon,
	DocumentMagnifyingGlassIcon,
	PlusCircleIcon,
} from "@heroicons/react/20/solid";
import { NavLink } from "@remix-run/react";

const people = [
	{
		name: "nuevo cash",
		title: "banco bolivariano",
		role: "Active",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://portalbb-multimedia.bolivariano.com/images/default-source/logos/bco-logo.jpg?sfvrsn=ac41c933_2",
	},
	{
		name: "recaudaciones 2024",
		title: "banco bolivariano",
		role: "Active",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1326551129182806021/t9ed9x5r_400x400.jpg",
	},

	{
		name: "proteccion de datos",
		title: "banco bolivariano",
		role: "Active",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTiQ_shs9c0mKXASWVbDpkbPn3uPe3RutHA&s",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	{
		name: "Jane Cooper",
		title: "Regional Paradigm Technician",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	// More people...
];

export default function Example() {
	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<li className="col-span-1 h-32 sm:h-full divide-gray-200 rounded-lg bg-white shadow  w-full p-3 transition">
				<NavLink to="#">
					<section className=" group h-full flex flex-col justify-center border-2 rounded-lg border-gray-300 border-dashed appearance-none cursor-pointer hover:border-gray-400 focus:outline-none transition">
						<div className="flex flex-col items-center justify-center space-x-2">
							<PlusCircleIcon className="text-gray-400  size-10 group-hover:text-gray-600 transition" />
							<span className="font-medium text-gray-400  capitalize group-hover:text-gray-600 transition">
								create new project
							</span>
						</div>
					</section>
				</NavLink>
			</li>
			{people.map((person) => (
				<li
					key={person.email}
					className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
				>
					<div className="flex w-full items-center justify-between space-x-6 p-6">
						<div className="flex-1 truncate">
							<p className="mt-1 truncate text-xs text-gray-500 capitalize">
								{person.title}
							</p>
							<div className="flex items-center space-x-3">
								<h3 className="truncate text-sm font-medium text-gray-900 capitalize">
									{person.name}
								</h3>
								<span className="capitalize inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
									{person.role}
								</span>
							</div>
							<p className="mt-1 truncate text-sm text-gray-500 capitalize">
								Jun/2024 - Nov/2024
							</p>
							<div className="flex -space-x-4 rtl:space-x-reverse mt-2">
								<img
									className="size-7 border-2 border-white rounded-full dark:border-gray-800"
									src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
									alt=""
								/>
								<img
									className="size-7 border-2 border-white rounded-full dark:border-gray-800"
									src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
									alt=""
								/>
								<img
									className="size-7 border-2 border-white rounded-full dark:border-gray-800"
									src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
									alt=""
								/>
								<button
									type="button"
									className="flex items-center justify-center size-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
								>
									+99
								</button>
							</div>
						</div>
						<img
							alt=""
							src={person.imageUrl}
							className="size-16 flex-shrink-0 rounded-full bg-gray-300"
						/>
					</div>
					<div>
						<div className="-mt-px flex divide-x divide-gray-200">
							<div className="flex w-0 flex-1">
								<a
									href={`mailto:${person.email}`}
									className="relative capitalize -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-2 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
								>
									<ClipboardDocumentListIcon
										aria-hidden="true"
										className="h-5 w-5 text-gray-400 "
									/>
									report
								</a>
							</div>
							<div className="-ml-px flex w-0 flex-1">
								<a
									href={`tel:${person.telephone}`}
									className="relative capitalize inline-flex w-0 flex-1 items-center justify-center gap-x-2 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
								>
									<DocumentMagnifyingGlassIcon
										aria-hidden="true"
										className="h-5 w-5 text-gray-400 "
									/>
									details
								</a>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
