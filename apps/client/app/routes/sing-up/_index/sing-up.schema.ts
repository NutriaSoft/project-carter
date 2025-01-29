import * as v from "valibot";

export const SingUpSchema = v.object({
	phone: v.pipe(
		v.string("Your name must be a string."),
		v.nonEmpty("Please enter your name."),
	),
	firstName: v.pipe(
		v.string("Your first name must be a string."),
		v.nonEmpty("Please enter your name."),
	),
	lastName: v.pipe(
		v.string("Your last name must be a string."),
		v.nonEmpty("Please enter your name."),
	),
	birthday: v.pipe(
		v.date("Your birthday must be a string."),
		v.maxValue(new Date(2020, 0, 1)),
	),
	email: v.pipe(
		v.string("Your email must be a string."),
		v.nonEmpty("Please enter your email."),
		v.email("The email address is badly formatted."),
	),
	password: v.pipe(
		v.string("Your password must be a string."),
		v.nonEmpty("Please enter your password."),
		v.minLength(8, "Your password must have 8 characters or more."),
	),
});
