import cookie from "cookie";
import { redirect } from "react-router";
// import { getSessionServer } from "~/utils/session.server";
import type { Route } from "./+types/_layout";

export async function DashboardLoader({ request }: Route.LoaderArgs) {
	//console.log(request);

	// const { data } = await getSessionServer(request);
	// if (!data) return redirect("/sing-in");
	const cookies = cookie.parse(request.headers.get("cookie") ?? "");

	// console.log({ cookies });
	

	return { cookies };
}
