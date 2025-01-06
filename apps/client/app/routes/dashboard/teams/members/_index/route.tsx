import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import type { authClient } from "@package/auth";
import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { authServer } from "~/utils/auh-server.server";

export async function loader({ request }: LoaderFunctionArgs) {
	try {
		const requestClone = request.clone();

		const result: Awaited<
			ReturnType<typeof authClient.admin.listUsers<never>>
		> = await authServer
			.headers(requestClone.headers)
			.get("/admin/list-users")
			.json();

		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export default function Index() {
	const loaderData = useLoaderData<typeof loader>();

	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{loaderData?.users.map((person) => (
				<li
					key={person.email}
					className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
				>
					<div className="flex flex-1 flex-col p-8">
						<img
							alt=""
							src={person.image ? person.image : ""}
							className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
						/>
						<dl className="mt-1 flex flex-grow flex-col justify-between">
							<dt className="sr-only">Role</dt>
							<dd className=" mt-6 text-xs text-gray-500 uppercase">
								{person.role}
							</dd>
							<dt className="sr-only">Name</dt>
							<dd className="text-sm font-medium text-gray-900 capitalize">
								{person.name}
							</dd>
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
