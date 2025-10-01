import { type ListOfTodos } from "../types";

interface Props {
  todos: ListOfTodos;
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className={todo.completed ? "completed" : ""} key={todo.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
            />
            <label>{todo.title}</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="Create a TodoMVC template" />
        </li>
      ))}
    </ul>
  );
};
