import { redirect } from "react-router";
// import { getSessionServer } from "~/.server/session";
import type { Route } from "./+types/route";

export async function SingInLoader({ request }: Route.LoaderArgs) {
	// const { data } = await getSessionServer(request);
	// if (!data) return null;
	// return redirect("/dashboard");
	return null
}
