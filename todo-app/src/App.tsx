const mockTodo = [
  { id: 1, title: "Learn TypeScript", completed: true },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Build a Todo App", completed: false },
  { id: 4, title: "Profit!", completed: true },
];

import { useState } from "react";
import { Todos } from "./components/Todos.tsx";

const App = () => {
  const [todos] = useState(mockTodo);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <Todos todos={todos} />
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>0</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
};

export default App;
