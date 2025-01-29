import { useLoaderData } from "react-router";
import { authClient } from "~/.client/better-auth";
import type { Route } from "./+types/route";
import { columns } from "./columns";
import { DataTable } from "./datatable";

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
	const { data, error } = await authClient.admin.listUsers({
		query: {
			limit: 10,
		},
	});
	console.log({ data, error });

	if (!data) {
		return null;
	}
	return { ...data };
}
clientLoader.hydrate = true;

export function HydrateFallback() {
	return <p>Skeleton rendered during SSR</p>; // (2)
}

export default function MembersIndex() {
	const loaderData = useLoaderData<typeof clientLoader>();
	return (
		<section>
			<DataTable columns={columns} data={loaderData?.users ?? []} />
		</section>
	);
}
