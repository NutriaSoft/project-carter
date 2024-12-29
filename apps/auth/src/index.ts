import { logger } from "@chneau/elysia-logger";
import type { auth } from "@package/auth";
import { type Context, Elysia } from "elysia";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { AuthUserInfo } from "../utils/auth-user.handler";
import { AuthHandler } from "../utils/better-auth.handler";

const app = new Elysia({
	// serve: {
	// 	hostname: process.env.AUTH_SERVER_HOSTNAME,
	// },
})
	.use(logger())
	.derive(({ request }) => AuthMiddleware(request))
	.all("/api/auth/*", AuthHandler, {
		beforeHandle(ctx: Context) {
			console.log(ctx.request, ctx.body);
		},
		async afterHandle(ctx: Context) {
			console.log(await ctx.response);
		},
	})
	.get(
		"/user",
		({
			user,
			session,
		}: {
			user: typeof auth.$Infer.Session.user | null;
			session: typeof auth.$Infer.Session.session | null;
		}) => AuthUserInfo(user, session),
	)
	.listen(Number(process.env.AUTH_SERVER_PORT));

console.log(
	`🦊 Elysia AUTH is running at ${app.server?.hostname}:${app.server?.port}`,
);
