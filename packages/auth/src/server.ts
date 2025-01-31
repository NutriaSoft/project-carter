import { VercelInviteUserEmail } from "@package/ui/emails/myEmail";
import { render } from "@package/ui/lib/email/render";
import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, magicLink, openAPI, organization } from "better-auth/plugins";
import { smtp_transporter } from "./smtp";

const prisma = new PrismaClient();

export const server = betterAuth({
	baseURL: "http://localhost:8888",
	secret: "AWESOME SECRET",
	trustedOrigins: ["http://localhost:5173", "http://127.0.0.1:5173"],
	database: prismaAdapter(prisma, {
		provider: "sqlite",
	}),
	plugins: [
		admin(),
		organization(),
		openAPI(),
		magicLink({
			disableSignUp: false,

			sendMagicLink: async ({ email, token, url }, request) => {
				if (!request) {
					return;
				}
				const { headers } = request.clone();

				const { session, user } = <typeof server.$Infer.Session>(
					await server.api.getSession({ headers })
				);

				console.log(await server.api.getSession({ headers })); // token

				// console.log(headers);
				// console.log(session);

				const { messageId } = await smtp_transporter.sendMail({
					from: '"Project Carter" <project_carter@ethereal.email>',
					to: "bar@example.com",
					subject: "Invite Your Account 📨",
					html: await render(
						VercelInviteUserEmail({
							appName: "APP_NAME",
							appImage: "https://remix.run/_brand/remix-letter-light.png",
							username: email,
							userImage: "https://avatars.githubusercontent.com/u/55502763?v=4",
							invitedByUsername: user.name ?? "USERNAME_INVITED_BY",
							invitedByEmail: user.email ?? "EMAIL_INVITED_BY",
							teamName: "TEAM_NAME",
							teamImage:
								"https://avatars.githubusercontent.com/u/132495275?s=200&v=4",
							inviteLink: url,
							inviteFromIp: session.ipAddress ?? "INVITE_FROM_IP",
							inviteFromLocation: "INVITE_FROM_LOCATION",
						}),
					),
				});

				console.log("Message sent: %s", messageId);
			},
		}),
	],

	logger: {
		disabled: false,
	},
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
	},
	emailVerification: {
		sendEmailVerificationOnSignUp: true,
		sendOnSignUp: true,

		async sendVerificationEmail({ user, url, token }, request) {
			// const { messageId } = await smtp_transporter.sendMail({
			// 	from: '"Project Carter" <project_carter@ethereal.email>',
			// 	to: "bar@example.com",
			// 	subject: "Account Verification 📨",
			// 	html: `
			// 				<b>Hello world HTML</b>
			// 				<span style="color:white">${url}</span>
			// 				<p style="color:white">${JSON.stringify(user)} </p>
			// 			`,
			// });
			// 	// const { messageId } = await smtp_transporter.sendMail({
			// 	// 	from: '"Project Carter" <project_carter@ethereal.email>',
			// 	// 	to: "bar@example.com",
			// 	// 	subject: "Account Verification 📨",
			// 	// 	html: `
			// 	// 				<b>Hello world HTML</b>
			// 	// 				<span style="color:white">${url}</span>
			// 	// 				<p style="color:white">${JSON.stringify(user)} </p>
			// 	// 			`,
			// 	// });
			// 	// console.log("Message sent: %s", messageId); // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
		},
	},
	user: {
		additionalFields: {
			lastName: {
				type: "string",
				required: false,
			},
			firstName: {
				type: "string",
				required: false,
			},
			phone: {
				type: "string",
				required: false,
			},
			birthday: {
				type: "date",
				required: false,
			},
		},
	},
});

export const auth = server;
