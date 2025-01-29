import { server } from "@package/auth/src/server";
import type { Context } from "elysia";

// validate request method
export const AuthHandler = (context: Context) => {
	const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
	// validate request method
	if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
		return server.handler(context.request);
	}
	context.error(405);
};
