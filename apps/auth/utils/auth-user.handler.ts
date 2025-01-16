import type { auth } from "@package/auth/src/server";

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
