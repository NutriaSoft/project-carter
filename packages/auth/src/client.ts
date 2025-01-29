import {
	adminClient,
	inferAdditionalFields,
	magicLinkClient,
	organizationClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react
import type { server } from "./server";
export const client = createAuthClient({
	// you can pass client configuration here
	// the base url of your auth server
	baseURL: "http://localhost:8888",
	plugins: [
		adminClient(),
		organizationClient(),
		magicLinkClient(),
		inferAdditionalFields<typeof server>(),
	],
});
