import type { Route } from "./+types/root";
import { themeSessionResolver } from "./.server/theme";
// Return the theme from the session storage using the loader
export async function RootLoader({ request }: Route.LoaderArgs) {
	const { getTheme } = await themeSessionResolver(request);
	return {
		theme: getTheme(),
	};
}
