import { type FilterValue } from "../types";
import { filtersButton } from "../consts";

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <ul className="filters">
      {Object.entries(filtersButton).map(([key, { label, href }]) => (
        <li key={key}>
          <a
            href={href}
            className={filterSelected == key ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              onFilterChange(key as FilterValue);
            }}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};
