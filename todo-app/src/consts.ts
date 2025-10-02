export const filters = {
  all: "all",
  completed: "completed",
  active: "active",
} as const; // Propiedades solo lectura, si se pone y obtenemos el typeof sacamos el valor literal y no su tipo de dato primitivo

export const filtersButton = {
  [filters.all]: {
    label: "Todos",
    href: `/?filters=${filters.all}`,
  },
  [filters.completed]: {
    label: "Completados",
    href: `/?filters=${filters.completed}`,
  },
  [filters.active]: {
    label: "Activos",
    href: `/?filters=${filters.active}`,
  },
} as const;
