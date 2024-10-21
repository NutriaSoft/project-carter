import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const people = [
	{
		name: "Jane Cooper",
		title: "Paradigm Representative",
		role: "Admin",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	// More people...
];

export default function Index() {
	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{people.map((person) => (
				<li
					key={person.email}
					className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
				>
					<div className="flex flex-1 flex-col p-8">
						<img
							alt=""
							src={person.imageUrl}
							className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
						/>
						<h3 className="mt-6 text-sm font-medium text-gray-900">
							{person.name}
						</h3>
						<dl className="mt-1 flex flex-grow flex-col justify-between">
							<dt className="sr-only">Title</dt>
							<dd className="text-sm text-gray-500">{person.title}</dd>
							<dt className="sr-only">Role</dt>
							<dd className="mt-3 space-x-2">
								<span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 capitalize">
									<svg
										viewBox="0 0 6 6"
										aria-hidden="true"
										className="h-1.5 w-1.5 fill-green-500"
									>
										<circle r={3} cx={3} cy={3} />
									</svg>
									Developer
								</span>
								<span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 capitalize">
									<svg
										viewBox="0 0 6 6"
										aria-hidden="true"
										className="h-1.5 w-1.5 fill-orange-500"
									>
										<circle r={3} cx={3} cy={3} />
									</svg>
									passant
								</span>
							</dd>
						</dl>
					</div>
					<div>
						<div className="-mt-px flex divide-x divide-gray-200">
							<div className="flex w-0 flex-1">
								<a
									href={`mailto:${person.email}`}
									className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
								>
									<EnvelopeIcon
										aria-hidden="true"
										className="h-5 w-5 text-gray-400"
									/>
									Email
								</a>
							</div>
							<div className="-ml-px flex w-0 flex-1">
								<a
									href={`tel:${person.telephone}`}
									className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
								>
									<PhoneIcon
										aria-hidden="true"
										className="h-5 w-5 text-gray-400"
									/>
									Call
								</a>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}

// const people = [
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	{
// 		name: "Lindsay Walton",
// 		title: "Front-end Developer",
// 		department: "Optimization",
// 		email: "lindsay.walton@example.com",
// 		role: "Member",
// 		image:
// 			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// 	},
// 	// More people...
// ];

// export default function Index() {
// 	return (
// 		<div className="mt-8 flow-root">
// 			<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
// 				<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
// 					<table className="min-w-full divide-y divide-gray-300">
// 						<thead>
// 							<tr>
// 								<th
// 									scope="col"
// 									className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
// 								>
// 									Name
// 								</th>
// 								<th
// 									scope="col"
// 									className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// 								>
// 									Title
// 								</th>
// 								<th
// 									scope="col"
// 									className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// 								>
// 									Status
// 								</th>
// 								<th
// 									scope="col"
// 									className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// 								>
// 									Role
// 								</th>
// 								<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
// 									<span className="sr-only">Edit</span>
// 								</th>
// 							</tr>
// 						</thead>
// 						<tbody className="divide-y divide-gray-200 bg-white">
// 							{people.map((person) => (
// 								<tr key={person.email}>
// 									<td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
// 										<div className="flex items-center">
// 											<div className="h-11 w-11 flex-shrink-0">
// 												<img
// 													alt=""
// 													src={person.image}
// 													className="h-11 w-11 rounded-full"
// 												/>
// 											</div>
// 											<div className="ml-4">
// 												<div className="font-medium text-gray-900">
// 													{person.name}
// 												</div>
// 												<div className="mt-1 text-gray-500">{person.email}</div>
// 											</div>
// 										</div>
// 									</td>
// 									<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
// 										<div className="text-gray-900">{person.title}</div>
// 										<div className="mt-1 text-gray-500">
// 											{person.department}
// 										</div>
// 									</td>
// 									<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
// 										<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
// 											Active
// 										</span>
// 									</td>
// 									<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
// 										{person.role}
// 									</td>
// 									<td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
// 										<div className="text-indigo-600 hover:text-indigo-900">
// 											Edit<span className="sr-only">, {person.name}</span>
// 										</div>
// 									</td>
// 								</tr>
// 							))}
// 						</tbody>
// 					</table>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
