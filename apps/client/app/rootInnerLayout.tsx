import type { ReactNode } from "react";
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import { PreventFlashOnWrongTheme, useTheme } from "remix-themes";

export interface InnerLayoutProps {
	children: ReactNode;
	ssrTheme: boolean;
}

export function RootInnerLayout({ children, ssrTheme }: InnerLayoutProps) {
	const [theme] = useTheme();
	return (
		<html
			lang="en"
			className={theme ?? ""}
			style={{ colorScheme: theme ?? "" }}
		>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body suppressHydrationWarning>
				{children}
				<ScrollRestoration />
				<PreventFlashOnWrongTheme ssrTheme={ssrTheme} />
				<Scripts />
			</body>
		</html>
	);
}
