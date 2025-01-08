import type { LinksFunction, LoaderFunctionArgs } from "react-router";
import {
	Links,
	Meta,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useNavigate,
	useRouteError,
	useRouteLoaderData,
} from "react-router";

import {
	PreventFlashOnWrongTheme,
	type Theme,
	ThemeProvider,
	useTheme,
} from "remix-themes";

import styles from "@package/ui/styles/globals.css";

import type { ReactNode } from "react";

import { themeSessionResolver } from "./utils/theme.server";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
	},
];

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary() {
	return <DefaultErrorBoundary />;
}

export function HydrateFallback() {
	return <h1>Loading...</h1>;
}

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export function Layout({ children }: { children: ReactNode }) {
	const data = useRouteLoaderData<typeof loader>("root");

	return (
		<ThemeProvider
			specifiedTheme={data?.theme as Theme}
			themeAction="/action/set-theme"
		>
			<InnerLayout ssrTheme={Boolean(data?.theme)}>{children}</InnerLayout>
		</ThemeProvider>
	);
}

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
	const { getTheme } = await themeSessionResolver(request);
	return {
		theme: getTheme(),
	};
}

function InnerLayout({
	ssrTheme,
	children,
}: {
	ssrTheme: boolean;
	children: ReactNode;
}) {
	const [theme] = useTheme();

	return (
		<html lang="en" className={theme ?? ""}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className=" text-black  dark:text-white" suppressHydrationWarning>
				{children}
				<ScrollRestoration />
				<PreventFlashOnWrongTheme ssrTheme={ssrTheme} />
				<Scripts />
			</body>
		</html>
	);
}

export function DefaultErrorBoundary() {
	const error = useRouteError();

	const navigate = useNavigate();
	if (isRouteErrorResponse(error)) {
		return (
			<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-base font-semibold text-indigo-600">
						{error.status}{" "}
					</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Page {error.statusText}
					</h1>
					<p className="mt-6 text-base leading-7 text-gray-600">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<span className="text-sm text-gray-500">{error.data}</span>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<button
							type="button"
							onClick={() => navigate(-1)}
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Go back
						</button>
						<NavLink to="#" className="text-sm font-semibold text-gray-900">
							Contact support <span aria-hidden="true">&rarr;</span>
						</NavLink>
					</div>
				</div>
			</main>
		);
	}

	if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
				<p>The stack trace is:</p>
				<pre>{error.stack}</pre>
			</div>
		);
	}

	if (!(error instanceof Error)) {
		return <h1>Unknown Error</h1>;
	}
}
