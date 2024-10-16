import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const client = createAuthClient({
	//you can pass client configuration here
	baseURL: "http://localhost:4444", // the base url of your auth server
});
