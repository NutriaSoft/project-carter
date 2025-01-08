import { redirect } from "react-router";
import { getSessionServer } from "~/utils/session.server";
import type { Route } from "./+types/route";

export async function SingInLoader({ request }: Route.LoaderArgs) {
	const { data } = await getSessionServer(request);
	if (!data) return null;
	return redirect("/dashboard");
}
