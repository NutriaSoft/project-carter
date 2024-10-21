import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, organization } from "better-auth/plugins";
import type { Context } from "elysia";
import { verificationEmail } from "./smtp";

const prisma = new PrismaClient();

export const auth = betterAuth({
	secret: "awsone",
	// plugins: [admin(), organization()],
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
	emailAndPassword: {
		enabled: true,
		sendEmailVerificationOnSignUp: true,
		sendVerificationEmail: async (url: string, user: unknown) => {
			const origin_url = new URL(url);

			console.log(origin_url);
		},
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
