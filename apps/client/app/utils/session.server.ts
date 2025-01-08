import { authClient } from "~/utils/better-auth.server";

export async function getSessionServer(request: Request) {
	const { headers } = request.clone();
	return await authClient.getSession({
		fetchOptions: { headers },
	});
}
