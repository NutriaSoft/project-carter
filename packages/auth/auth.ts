import { prismaClient } from "@package/database";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createTransport } from "nodemailer";

const transporter = createTransport({
	host: "0.0.0.0",
	port: 1025,
	secure: false,
	auth: {
		// user: "maddison53@ethereal.email",
		// pass: "jn7jnAPss4f63QBp6D",
	},
});
export const auth = betterAuth({
	basePath: "api/auth",
	baseURL: "http://localhost:4444",
	secret: "amazing secret",
	logger: {
		disabled: false,
		verboseLogging: true,
	},

	database: prismaAdapter(prismaClient, {
		provider: "sqlite",
	}),
	emailAndPassword: {
		enabled: true,
		sendEmailVerificationOnSignUp: true,
		async sendVerificationEmail(url, user) {
			const { messageId } = await transporter.sendMail({
				from: '"Project Carter" <project_carter@ethereal.email>',
				to: "bar@example.com",
				subject: "Account Verification 📨",
				html: `
					<b>Hello world HTML</b>
					<span style="color:white">${url}</span>
					<p style="color:white">${JSON.stringify(user)}</p>
				`,
			});

			console.log("Message sent: %s", messageId); // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
		},
	},
});
