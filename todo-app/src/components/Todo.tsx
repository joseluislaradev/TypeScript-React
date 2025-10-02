import { type TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemove: ({ id }: TodoId) => void;
  onComplete: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemove,
  onComplete,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // El tipo de evento para un input checkbox, ya que ChangeEvent es generico y podria ser cualquier tipo
    onComplete({ id, completed: e.target.checked });
  };

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChange}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onRemove({ id })}></button>
    </div>
  );
};
