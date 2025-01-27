import type { Todo } from "./schemas/todo.schema";

export class TodoRepository {
	// This is a simple in-memory storage
	// You can replace this with a database or any other storage
	private data: Todo[] = [
		{
			title: "Hello",
			description: "World",
			createAt: new Date(),
			updateAt: new Date(),
		},
		{
			title: "Moonhalo",
			description: "anyways content",
			createAt: new Date(),
			updateAt: new Date(),
		},
	];

	public get() {
		return this.data;
	}

	public getById(id: number) {
		return this.data.at(id);
	}

	public add(todo: Todo) {
		this.data.push(todo);
		return this.data;
	}

	public remove(index: number) {
		return this.data.splice(index, 1);
	}

	public update(index: number, todo: Todo) {
		this.data[index] = todo; // Asignación explícita
		return todo; // Retorno del objeto actualizado
	}
}
