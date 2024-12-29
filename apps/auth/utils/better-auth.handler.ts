import { auth } from "@package/auth";
import type { Context } from "elysia";

// validate request method
export const AuthHandler = ({ request, error }: Context) =>
	["POST", "GET"].includes(request.method) ? auth.handler(request) : error(405);
