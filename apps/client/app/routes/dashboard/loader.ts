import cookie from "cookie";
import { redirect } from "react-router";
import type { Route } from "./+types/_layout";
import { authClient } from "~/.server/better-auth";

export async function DashboardLoader({ request }: Route.LoaderArgs) {
	const { headers } = request.clone();
	const { data, error } = await authClient.getSession({
		fetchOptions: { headers },
	});
	if (!data || error) return redirect("/sing-in");
	const cookies = cookie.parse(headers.get("cookie") ?? "");
	return { cookies };
}
