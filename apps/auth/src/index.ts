import { logger } from "@chneau/elysia-logger";
import { cors } from "@elysiajs/cors";
import type { auth } from "@package/better-auth/auth";
import { getEnvArray } from "@package/better-auth/helpers/env";
import { Elysia, t } from "elysia";
import { betterAuth } from "../middleware/auth.middleware";

const app = new Elysia()
	.use(betterAuth)
	.use(logger())
	.use(
		cors({
			origin: getEnvArray(process.env.BETTER_AUTH_TRUSTED_ORIGINS || "*"),
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			credentials: true,
			allowedHeaders: ["Content-Type", "Authorization"],
		}),
	)
	.get(
		"/user",
		({
			user,
		}: {
			user: typeof auth.$Infer.Session.user | null;
		}) => user,
		{
			auth: true,
		},
	)
	.listen(Number(process.env.AUTH_SERVER_PORT));

console.log(
	`🦊 Elysia AUTH is running at ${app.server?.hostname}:${app.server?.port}`,
);
