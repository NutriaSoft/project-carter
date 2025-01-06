import { createCookieSessionStorage } from "react-router";
import { createThemeSessionResolver } from "remix-themes";

// You can default to 'development' if process.env.NODE_ENV is not set

const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "__remix-themes",
		// domain: 'remix.run',
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secrets: ["s3cr3t"],
		secure: process.env.NODE_ENV === "production",
	},
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
