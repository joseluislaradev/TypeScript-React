const mockTodo = [
  { id: "1", title: "Learn TypeScript", completed: true },
  { id: "2", title: "Learn React", completed: false },
  { id: "3", title: "Build a Todo App", completed: false },
  { id: "4", title: "Profit!", completed: true },
];

import { useState } from "react";
import { Todos } from "./components/Todos.tsx";
import {
  type FilterValue,
  type TodoId,
  type TodoTitle,
  type Todo as TodoType,
  type State,
  type Action,
} from "./types";
import { Footer } from "./components/Footer.tsx";
import { filters, Actions } from "./consts.ts";
import { Header } from "./components/Header.tsx";

function reducer(state: State, action: Action): State {
  if (action.type == Actions.removeTodo) {
    const newTodos = state.todos.filter((t) => t.id != action.payload.id.id);
    return { ...state, todos: newTodos };
  }
  if (action.type == Actions.toggleTodo) {
    const newTodos = state.todos.map((t) => {
      if (t.id === action.payload.id.id) {
        return { ...t, completed: action.payload.completed.completed };
      }
      return t;
    });
    return { ...state, todos: newTodos };
  }
  if (action.type == Actions.clearCompletedTodo) {
    const newTodos = state.todos.filter((t) => !t.completed);
    return { ...state, todos: newTodos };
  }
  if (action.type == Actions.filterSelectedTodo) {
    return { ...state, filters: action.payload.filter };
  }
  if (action.type == Actions.addTodo) {
    const newTodo = {
      id: crypto.randomUUID(),
      title: action.payload.title.title,
      completed: false,
    };

    const newTodoList = [...state.todos, newTodo];

    return { ...state, todos: newTodoList };
  } else {
    return state;
  }
}

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

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    const newTodoList = [...todos, newTodo];

    setTodos(newTodoList);
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
      <Header onAddTodo={handleAddTodo} />
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
