import { type Static, t } from "elysia";

export const TodoSchema = t.Object({
	title: t.String(),
	description: t.String(),
	createAt: t.Date(),
	updateAt: t.Date(),
});

export type Todo = Static<typeof TodoSchema>;
