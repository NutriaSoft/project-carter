import { logger } from "@chneau/elysia-logger";
import { auth } from "@package/auth/";
import { Elysia } from "elysia";

const app = new Elysia()
	.use(logger())
	.all("/api/auth/*", ({ request, error }) =>
		["POST", "GET"].includes(request.method)
			? auth.handler(request)
			: error(405),
	)
	// .get("test", async () => { })
	.listen(4444);

console.log(
	`🦊 Elysia AUTH is running at ${app.server?.hostname}:${app.server?.port}`,
);
