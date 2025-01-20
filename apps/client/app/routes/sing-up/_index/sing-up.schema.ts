import { subYears } from "date-fns";
import {
	date,
	email,
	maxValue,
	minLength,
	minValue,
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
		date("Your birthday must be a string."),
		minValue(subYears(new Date(), 75)),
		maxValue(subYears(new Date(), 18)),
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
