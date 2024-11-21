import { client as auth_client } from "@package/auth";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import {
	email,
	minLength,
	nonEmpty,
	object,
	parse,
	pipe,
	string,
} from "valibot";
import { sessionStorage } from "./session.server";

// eslint-disable-next-line prefer-const
export const authenticator = new Authenticator(sessionStorage);


const LoginSchema = object({
	email: pipe(
		string("Your email must be a string."),
		nonEmpty("Please enter your email."),
		email("The email address is badly formatted."),
	),
	password: pipe(
		string("Your password must be a string."),
		nonEmpty("Please enter your password."),
		minLength(8, "Your password must have 8 characters or more."),
	),
});

authenticator.use(
	new FormStrategy(async ({ form }) => {

		const { email, password } = parse(LoginSchema, {
			password: String(form.get("password")),
			email: String(form.get("email")),
		});

		const { data, error } = await auth_client.signIn.email({
			email,
			password,
		});

		if (error) throw new Error(error.message, { cause: error })

		return data.session;
	}),
	// each strategy has a name and can be changed to use another one
	// same strategy multiple times, especially useful for the OAuth2 strategy.
	"user-pass",
);