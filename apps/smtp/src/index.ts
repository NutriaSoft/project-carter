import { Elysia } from "elysia";
import { connect } from "elysia-connect-middleware";
import { createProxyMiddleware } from "http-proxy-middleware";
import MailDev from "maildev";

// Define a route for the base path
const maildev = new MailDev({});

// Maildev now running on localhost:1080/maildev
maildev.listen((err) => {
	console.log("We can now sent emails to port 1025!");
});

const app = new Elysia()
	.all("/maildev", async ({ request }) => {
		const url = "localhost:1025/maildev";
		return fetch(url, {
			method: request.method,
			headers: request.headers,
			body: request.method !== "GET" ? JSON.stringify(request.body) : null,
		});
	})
	// .get("/", () => "Hello Elysia")
	.listen(3333);

console.log(
	`🦊 Elysia SMTP is running at ${app.server?.hostname}:${app.server?.port}`,
);
