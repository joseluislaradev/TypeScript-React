import { filters } from "./consts.ts";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">; // Regresa un objeto { id: number }. Para un datos primitivo directo usamos Todo["id"]
export type TodoTitle = Pick<Todo, "title">;
export type TodoCompleted = Pick<Todo, "completed">;

export type ListOfTodos = Todo[];

export type FilterValue = (typeof filters)[keyof typeof filters]; // Esto es para que el tipo sea uno de los valores del objeto filters, la primera es para obtener el tipo de una key del objeto para para poenrlas todas es la segunda parte, ocn eso decirmos que utilice alguna de las keys del Filters y una vez que utiliza la s key saca el type of.
