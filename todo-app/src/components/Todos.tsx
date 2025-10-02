import { type ListOfTodos, type TodoId, type Todo as TodoType } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemove: ({ id }: TodoId) => void;
  onComplete: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemove, onComplete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className={todo.completed ? "completed" : ""} key={todo.id}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemove={onRemove}
            onComplete={onComplete}
          />
        </li>
      ))}
    </ul>
  );
};
