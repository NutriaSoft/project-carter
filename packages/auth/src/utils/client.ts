import { adminClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const client = createAuthClient({
	//you can pass client configuration here
	// the base url of your auth server

	plugins: [
		// organizationClient(),
		// adminClient()
	],
});
