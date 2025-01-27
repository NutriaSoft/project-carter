import { client } from "@package/auth/src/client";

export const { signIn, signUp, signOut, useSession, getSession } = client;

export const authClient = client;
