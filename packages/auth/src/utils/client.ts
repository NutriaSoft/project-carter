import { adminClient, organizationClient } from "better-auth/client/plugins";
import type { UserWithRole } from "better-auth/plugins";
import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient({
	//you can pass client configuration here
	// the base url of your auth server
	baseURL: "http://localhost:8888",
	plugins: [adminClient(), organizationClient()],
});
