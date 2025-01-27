import { t } from "elysia";

export const CreateTodoSchema = t.Object({
	title: t.String(),
	description: t.String(),
});
