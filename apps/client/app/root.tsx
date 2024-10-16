import type { LinksFunction } from "@remix-run/node";
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
} from "@remix-run/react";

import "./tailwind.css";
import type { ReactNode } from "react";

export const links: LinksFunction = () => [
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
];

export function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export function ErrorBoundary() {
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

export default function App() {
	return <Outlet />;
}
