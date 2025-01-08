import { staticPlugin } from "@elysiajs/static";
import { client } from "@package/auth/src/client";
import { type Context, Elysia, file, t } from "elysia";

const app = new Elysia()
	.use(staticPlugin())

	.get("/file", () => file("public/0194248e-5cdb-7000-969a-17975af7d36b.jpg"))
	.post(
		"/file",
		async (ctx) => {
			const body = ctx.body.file;
			const headers = ctx.request.headers;

			const { data, error } = await client.getSession({
				fetchOptions: { headers },
			});

			if (error) return ctx.error("Unauthorized", error);

			console.log(ctx.request);

			const protocol =
				process.env.NODE_ENV !== "production" ? "http://" : "https://";
			const id = Bun.randomUUIDv7();
			const bucketUrl = ctx.headers.host;
			const url = `${protocol}${bucketUrl}/public/${id}.jpg`;

			await Bun.write(`./public/${id}.jpg`, body, {
				createPath: true,
			});

			return {
				id,
				url,
			};
		},
		{
			// body: t.Object({
			//   file: t.File()
			// })
		},
	)

	.get("/", () => "Hello Elysia")
	.listen(3333);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
