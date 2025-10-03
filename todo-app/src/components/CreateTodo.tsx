import { useState } from "react";
import { type TodoTitle } from "../types";

interface Props {
  onAddTodo: ({title}: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodo({ title: inputValue });
    setInputValue("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="¿Qué hay que hacer?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
    </form>
  );
};
