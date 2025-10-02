import { useState } from "react";
import { type TodoTitle } from "../types";

interface Props {
  onAddTodo: (title: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const input = event.target as HTMLInputElement;
      onAddTodo(input.value);
      setInputValue("");
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="¿Qué hay que hacer?"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
};
