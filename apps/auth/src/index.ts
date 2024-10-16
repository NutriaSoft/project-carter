import { logger } from "@chneau/elysia-logger";
import { auth as auth_server } from "@package/auth/";
import { Elysia } from "elysia";

const app = new Elysia()
	.use(logger())
	.all("/api/auth/*", ({ request }) => auth_server.handler(request))
	.listen(4444);

console.log(
	`🦊 Elysia AUTH is running at ${app.server?.hostname}:${app.server?.port}`,
);
