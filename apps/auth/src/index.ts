import { logger } from "@chneau/elysia-logger";
import type { auth } from "@package/auth";
import { type Context, Elysia, t } from "elysia";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { AuthUserInfo } from "../utils/auth-user.handler";
import { AuthHandler } from "../utils/better-auth.handler";

const app = new Elysia({})
	.use(logger())
	.all("/api/auth/*", AuthHandler, {
		async afterHandle(ctx: Context) {
			// console.log(await ctx.response);
		},
		error(ctx: Context) {
			console.log(ctx.error);
		},
	})
	.derive((ctx: Context) => AuthMiddleware(ctx.request))
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
