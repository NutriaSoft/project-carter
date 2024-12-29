import { auth } from "@package/auth";

// user middleware (compute user and session and pass to routes)
export const AuthMiddleware = async (request: Request) => {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session) return { user: null, session: null };
	return { user: session.user, session: session.session };
};
