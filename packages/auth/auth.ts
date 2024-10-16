import { prismaClient } from "@package/database";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
	database: prismaAdapter(prismaClient, {
		provider: "sqlite",
	}),
	secret: "amazing secret",
	emailAndPassword: { enabled: true },
});
