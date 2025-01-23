import { createThemeAction } from "remix-themes";
import { themeSessionResolver } from "~/.server/theme";

export const action = createThemeAction(themeSessionResolver);
