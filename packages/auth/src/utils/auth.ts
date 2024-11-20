import { PrismaClient } from "@prisma/client/index.js";
import { type User, betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, organization } from "better-auth/plugins";
import type { Context } from "elysia";
import { smtp_transporter } from "./smtp";

const prisma = new PrismaClient();

export const auth = betterAuth({
	plugins: [
		admin(),
		organization({
			async allowUserToCreateOrganization(user) {
				const findUser = await prisma.user.findFirst({
					where: { ...user },
				});

				return findUser?.role === "admin";
			},
		}),
	],
	user: {
		additionalFields: {
			age: {
				type: "number",
				required: false,
			},
		},
	},
	database: prismaAdapter(prisma, {
		provider: "sqlite",
	}),
	logger: {
		disabled: false,
		verboseLogging: true,
	},
	advanced: {
		disableCSRFCheck: true,
		crossSubDomainCookies: {
			enabled: true,
			// domain: "example.com" // Optional. Defaults to the base url domain
		},
	},
	emailVerification: {
		sendOnSignUp: true,
		async sendVerificationEmail(user: User, url: string, token: string) {
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
		sendEmailVerificationOnSignUp: true,
	},
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
	},
});

// validate request method
export const AuthHandler = ({ request, error }: Context) =>
	["POST", "GET"].includes(request.method) ? auth.handler(request) : error(405);

// user middleware (compute user and session and pass to routes)
export const AuthMiddleware = async (request: Request) => {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session) return { user: null, session: null };
	return { user: session.user, session: session.session };
};

// user info view
export const AuthUserInfo = (
	user: typeof auth.$Infer.Session.user | null,
	session: typeof auth.$Infer.Session.session | null,
) => {
	return {
		user: user,
		session: session,
	};
};
