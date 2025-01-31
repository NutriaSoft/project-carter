import type { User } from "better-auth";
import { createTransport } from "nodemailer";

export const smtp_transporter = createTransport({
	host: "0.0.0.0",
	port: 1025,
	secure: false,
	auth: {
		// user: "maddison53@ethereal.email",
		// pass: "jn7jnAPss4f63QBp6D",
	},
});
