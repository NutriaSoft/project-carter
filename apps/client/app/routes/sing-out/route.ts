import { authClient } from "@package/auth";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/utils/authenticator.server";

export async function loader({ request }: LoaderFunctionArgs) {
	await authClient.signOut();
	await authenticator.logout(request, { redirectTo: "/sing-in" });
}
