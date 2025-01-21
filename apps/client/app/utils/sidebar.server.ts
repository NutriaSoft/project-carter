import { createCookieSessionStorage } from "react-router";

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === "production";

const sidebarStorage = createCookieSessionStorage({
	cookie: {
		name: "__remix-themes",
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secrets: ["s3cr3t"],
		// Set domain and secure only if in production
		...(isProduction
			? { domain: "your-production-domain.com", secure: true }
			: {}),
	},
});

export const { getSession, commitSession, destroySession } = sidebarStorage;
