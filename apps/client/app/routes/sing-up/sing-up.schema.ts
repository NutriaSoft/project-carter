import {
	date,
	email,
	maxValue,
	minLength,
	nonEmpty,
	object,
	pipe,
	string,
} from "valibot";

export const SingUpSchema = object({
	phone: pipe(
		string("Your name must be a string."),
		nonEmpty("Please enter your name."),
	),
	firstName: pipe(
		string("Your first name must be a string."),
		nonEmpty("Please enter your name."),
	),
	lastName: pipe(
		string("Your last name must be a string."),
		nonEmpty("Please enter your name."),
	),
	birthday: pipe(
		string("Your birthday must be a string."),
		nonEmpty("Please enter your name."),
	),
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
