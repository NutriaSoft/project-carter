import { authClient } from "@package/auth";
import wretch from "wretch";

export const authServer = wretch("http://localhost:8888/api/auth");

export function singOut({ headers }: Request) {
	const { promise, resolve, reject } = Promise.withResolvers<Response>();

	authClient.signOut({
		fetchOptions: {
			headers,
			onSuccess(context) {
				resolve(context.response);
			},
			onError(ctx) {
				reject(ctx);
			},
		},
	});

	return promise;
}
