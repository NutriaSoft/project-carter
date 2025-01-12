import type { ReactNode } from "react";
import { useLoaderData } from "react-router";
import { ThemeProvider } from "remix-themes";
import type { RootLoader } from "./loader";
import { RootInnerLayout } from "./rootInnerLayout";

export function RootLayout({ children }: { children: ReactNode }) {
	const loader = useLoaderData<typeof RootLoader>();

	return (
		<ThemeProvider
			specifiedTheme={loader.theme}
			themeAction="/action/set-theme"
		>
			<RootInnerLayout ssrTheme={Boolean(loader.theme)}>
				{children}
			</RootInnerLayout>
		</ThemeProvider>
	);
}
