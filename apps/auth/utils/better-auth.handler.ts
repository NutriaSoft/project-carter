import { server } from "@package/auth/src/server";
import type { Context } from "elysia";

// validate request method
export const AuthHandler = ({ request, error }: Context) =>
	["POST", "GET"].includes(request.method)
		? server.handler(request)
		: error(405);
