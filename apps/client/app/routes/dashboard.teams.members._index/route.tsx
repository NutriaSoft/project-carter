import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { authClient } from "@package/auth";

const people = [
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		department: "Optimization",
		email: "lindsay.walton@example.com",
		role: "Member",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	// More people...
];

export async function loader() {
	const users = await authClient.admin.listUsers({
		query: {
			limit: 10,
		},
	});

	console.log(users);

	return null;
}

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
							src={person.image}
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
								<span className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
									<PhoneIcon
										aria-hidden="true"
										className="h-5 w-5 text-gray-400"
									/>
									Call
								</span>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
