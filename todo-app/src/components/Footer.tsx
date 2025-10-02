import type React from "react";
import { type FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  onClearCompleted: () => void;
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
  onClearCompleted,
  activeCount,
  completedCount,
  filterSelected,
  handleFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Limpiar
        </button>
      )}
    </footer>
  );
};
