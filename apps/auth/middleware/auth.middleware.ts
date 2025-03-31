import { auth } from "@package/better-auth/auth";
import Elysia from "elysia";

// user middleware (compute user and session and pass to routes)
export const betterAuth = new Elysia({ name: "better-auth" })
	.mount(auth.handler)
	.macro({
		auth: {
			async resolve({ error, request: { headers } }) {
				const session = await auth.api.getSession({
					headers,
				});

				if (!session) return error(401);

				return {
					user: session.user,
					session: session.session,
				};
			},
		},
	});
