import { Outlet } from "react-router";

import { RootLayout } from "./layout";
import { RootLinks } from "./link";
import { RootLoader } from "./loader";
import { RootMeta } from "./meta";
import { RootErrorBoundary } from "./rootErrorBoundary";

export const links = RootLinks;
export const loader = RootLoader;
export const meta = RootMeta;

export default function App() {
	return (
		<RootLayout>
			<Outlet />
		</RootLayout>
	);
}

export function ErrorBoundary() {
	return <RootErrorBoundary />;
}

export function HydrateFallback() {
	return <h1>Loading...</h1>;
}
