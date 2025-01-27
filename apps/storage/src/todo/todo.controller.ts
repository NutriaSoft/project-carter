import { Elysia, InvertedStatusMap, StatusMap, error, t } from "elysia";
import { HttpMethod, HttpStatus } from "http-status-ts";
import {
	ApiErrorResponseSchema,
	ApiResponseSchema,
} from "src/libs/schemas/api-response.schema";
import { CreateTodoSchema } from "./schemas/todo-create.schema";
import { TodoSchema } from "./schemas/todo.schema";
import { TodoService } from "./todo.service";

export const TodoController = new Elysia({
	name: "Controller.Todo",
	prefix: "/todo",
})
	.use(TodoService)
	.get("/", ({ todoService: { getTodos } }) => getTodos())
	.get(
		"/:id",
		({ todoService: { getTodoById }, params: { id } }) => getTodoById(id),
		{
			params: t.Object({
				id: t.Number(),
			}),
			response: {
				[StatusMap.OK]: ApiResponseSchema(TodoSchema),
				[StatusMap["Not Found"]]: ApiErrorResponseSchema,
			},
		},
	)
	// .post("/", ({ todoService: { repository }, body }) => repository.add(body), {
	// 	body: CreateTodoSchema,
	// })
	.put("/:id", () => "Hello Elysia")
	.delete("/:id", () => "Hello Elysia");
