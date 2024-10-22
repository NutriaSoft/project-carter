import { logger } from "@chneau/elysia-logger";
import { AuthHandler, AuthMiddleware, AuthUserInfo } from "@package/auth";
import { Elysia } from "elysia";

const app = new Elysia({
	serve: {
		hostname: process.env.AUTH_SERVER_HOSTNAME,
	},
})
	.use(logger())
	.derive(({ request }) => AuthMiddleware(request))
	.all("/api/auth/*", AuthHandler)
	.get("/user", ({ user, session }) => AuthUserInfo(user, session))
	.listen(Number(process.env.AUTH_SERVER_PORT));

console.log(
	`🦊 Elysia AUTH is running at ${app.server?.hostname}:${app.server?.port}`,
);
