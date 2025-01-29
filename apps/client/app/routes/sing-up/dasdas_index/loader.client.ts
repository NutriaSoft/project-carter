import { authClient } from "~/.client/better-auth";
import type { Route } from "./+types/route";

export async function SingUpIndexClientLoader({
	request,
	params,
}: Route.ClientLoaderArgs) {
	// const url = new URL(request.url);
	// const token = url.searchParams.get("token");
	// console.log(token);
	const { data, error } = await authClient.getSession();

	console.log({ data, error });
	if (!data || error) {
		return null;
	}
	return { ...data };
}

SingUpIndexClientLoader.hydrate = true;
