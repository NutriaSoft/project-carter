import { PGlite } from "@electric-sql/pglite";
import { getEnvArray } from "@package/better-auth/helpers/env";
import { smtp_transporter } from "@package/better-auth/helpers/smtp";
import { VercelInviteUserEmail } from "@package/ui/emails/myEmail";
import { render } from "@package/ui/lib/email/render";
import { type BetterAuthOptions, betterAuth } from "better-auth";
import { admin, magicLink, openAPI, organization } from "better-auth/plugins";
import { PGliteDialect } from "kysely-pglite-dialect";

console.log(process.env);

type MagicLinkOptions = Parameters<typeof magicLink>["0"];
type EmailVerificationOptions = BetterAuthOptions["emailVerification"];

const magicLinkOptions: MagicLinkOptions = {
	disableSignUp: false,

	sendMagicLink: async ({ email, token, url }, request) => {
		// if (!request) {
		// 	return;
		// }
		// const { headers } = request.clone();

		// const { session, user } = <typeof server.$Infer.Session>(
		// 	await server.api.getSession({ headers })
		// );

		// console.log(await server.api.getSession({ headers })); // token

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
					// invitedByUsername: user.name ?? "USERNAME_INVITED_BY",
					// invitedByEmail: user.email ?? "EMAIL_INVITED_BY",
					teamName: "TEAM_NAME",
					teamImage:
						"https://avatars.githubusercontent.com/u/132495275?s=200&v=4",
					inviteLink: url,
					// inviteFromIp: session.ipAddress ?? "INVITE_FROM_IP",
					inviteFromLocation: "INVITE_FROM_LOCATION",
				}),
			),
		});

		console.log("Message sent: %s", messageId);
	},
};

const emailVerificationOptions: EmailVerificationOptions = {
	sendOnSignUp: true,
	autoSignInAfterVerification: false,
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
};

export const auth = betterAuth({
	appName: "better-auth-test",
	database: new PGliteDialect(new PGlite(`${__dirname}/pg`)),
	trustedOrigins: getEnvArray(process.env.BETTER_AUTH_TRUSTED_ORIGINS || "*"),
	plugins: [openAPI(), admin(), organization(), magicLink(magicLinkOptions)],
	emailAndPassword: { enabled: true, requireEmailVerification: true },
	logger: { disabled: false },
	emailVerification: emailVerificationOptions,
});
