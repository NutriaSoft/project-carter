"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "remix-themes";

import { Button } from "@package/ui/components/button";
import { Theme } from "remix-themes";

export interface ThemeToggleProps {
	className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
	const [theme, setTheme] = useTheme();

	const changeTheme = () =>
		setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={changeTheme}
			className={className}
		>
			<Sun className="size-3 dark:hidden" />
			<Moon className="hidden size-3 dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
