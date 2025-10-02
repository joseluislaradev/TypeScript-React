const mockTodo = [
  { id: 1, title: "Learn TypeScript", completed: true },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Build a Todo App", completed: false },
  { id: 4, title: "Profit!", completed: true },
];

import { useState } from "react";
import { Todos } from "./components/Todos.tsx";
import { type FilterValue, type TodoId, type Todo as TodoType } from "./types";
import { Footer } from "./components/Footer.tsx";
import { filters } from "./consts.ts";

const App = () => {
  const [todos, setTodos] = useState(mockTodo);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    filters.all
  ); //se pone el tipo FilterValue para que no acepte cualquier string

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((t) => t.id != id);
    setTodos(newTodos);
  };

  const handleComplete = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => {
    // ESto es decirle que solo me interesan esas dos propiedades del tipo Todo, el operador | es de union
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, completed };
      }
      return t;
    });
    setTodos(newTodos);
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter((t) => !t.completed);
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: typeof filterSelected) => {
    setFilterSelected(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === filters.active) return !todo.completed;
    if (filterSelected === filters.completed) return todo.completed;
    return todo;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <section className="todoapp">
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label>Mark all as complete</label>
        <Todos
          todos={filteredTodos}
          onRemove={handleRemove}
          onComplete={handleComplete}
        />
      </section>
      <Footer
        onClearCompleted={handleClearCompleted}
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </section>
  );
};

export default App;
