import { type LoaderFunctionArgs, redirect } from "@remix-run/node";
import { WretchError } from "wretch/resolver";
import { authServer } from "~/utils/auh-server.server";

export async function loader({ request }: LoaderFunctionArgs) {
	try {
		const authRequest = await authServer
			.headers({ ...request.headers })
			.post({}, "/sign-out")
			.res();

		return redirect("/sing-in", {
			headers: new Headers([
				...request.headers.entries(),
				...authRequest.headers.entries(),
			]),
		});
	} catch (exception) {
		if (exception instanceof Response) return exception;
		if (exception instanceof WretchError) {
			return redirect("/sing-in", {
				headers: new Headers([
					...request.headers.entries(),
					...exception.response.headers.entries(),
				]),
			});
		}
	}
}
