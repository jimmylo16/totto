import departments from "../../locales/departments.json";
export const departamentoOptions = departments.map((department) => {
  return {
    value: department.departamento,
    label: department.departamento,
  };
});
interface Option {
  value: number | string;
  label: string;
}
export const ciudadOptions: Record<string, Option[]> = departments.reduce(
  (acc: Record<string, Option[]>, item, index) => {
    const key = `${item.departamento}`;
    acc[key] = item.ciudades.map((ciudad, ciudadIndex) => ({
      value: ciudad,
      label: ciudad,
    }));
    return acc;
  },
  {}
);
