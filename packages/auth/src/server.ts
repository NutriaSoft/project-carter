import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, openAPI, organization } from "better-auth/plugins";
import { smtp_transporter } from "./smtp";

const prisma = new PrismaClient();

export const server = betterAuth({
	baseURL: "http://localhost:8888",
	trustedOrigins: ["http://localhost:5173", "http://127.0.0.1:5173"],
	plugins: [admin(), organization(), openAPI()],
	database: prismaAdapter(prisma, {
		provider: "sqlite",
	}),
	user: {
		additionalFields: {
			lastName: {
				type: "string",
				required: true,
			},
			firstName: {
				type: "string",
				required: true,
			},
			phone: {
				type: "string",
				required: true,
			},
			birthday: {
				type: "date",
				required: false,
			},
		},
	},
	logger: {
		disabled: false,
	},
	emailVerification: {
		sendEmailVerificationOnSignUp: true,
		sendOnSignUp: true,
		async sendVerificationEmail({ user, url, token }, request) {
			const { messageId } = await smtp_transporter.sendMail({
				from: '"Project Carter" <project_carter@ethereal.email>',
				to: "bar@example.com",
				subject: "Account Verification 📨",
				html: `
							<b>Hello world HTML</b>
							<span style="color:white">${url}</span>
							<p style="color:white">${JSON.stringify(user)} </p>
						`,
			});

			console.log("Message sent: %s", messageId); // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
		},
	},
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
	},
});

export const auth = server;
