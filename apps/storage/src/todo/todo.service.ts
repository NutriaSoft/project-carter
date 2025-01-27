import { Parse, Value } from "@sinclair/typebox/value";
import { Elysia, StatusMap, error, t } from "elysia";
import type {
	ApiErrorResponse,
	ApiErrorResponseSchema,
	ApiResponse,
} from "src/libs/schemas/api-response.schema";
import { TodoSchema } from "./schemas/todo.schema";
import { TodoRepository } from "./todo.repository";

export const TodoService = new Elysia({ name: "Service.Todo" })
	.decorate("Repository", new TodoRepository())
	.derive({ as: "scoped" }, ({ Repository }) => ({
		// This is equivalent to dependency injection
		todoService: {
			getTodoById: (id: number) => {
				const todo = Repository.getById(id);
				if (!todo) {
					return error(StatusMap["Not Found"], <ApiErrorResponse>{
						code: 1,
						status: "Item Not Found",
						message: "The item not exist in the list",
					});
				}

				return <ApiResponse<typeof TodoSchema>>{
					data: todo,
					meta: {
						code: 0,
						status: "Item Is Found",
						message: "The item not exist in the list",
						pagination: null,
					},
				};
			},
			getTodos: () => {
				const todoList = Repository.get();
				const todoL = t.Array(TodoSchema);

				return <ApiResponse<typeof todoL>>{
					data: todoList,
					meta: {
						code: 0,
						status: "Item Is Found",
						message: "The item not exist in the list",
						pagination: null,
					},
				};
			},
		},
	}));
