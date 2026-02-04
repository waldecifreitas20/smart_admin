import { createContext, useState, type PropsWithChildren } from "react";
import type { Employee } from "../types/Employee";

export const EmployeeContext = createContext({
  setDayOff: (_employee: Employee, _dayOff: Date) => {},
  employees: [] as Employee[],
});

const employees: Employee[] = [
  { edv: "687363", name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 13)] },
  { edv: "999999", name: "Maria", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 12)] },
  { edv: "465182", name: "João", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 11)] },
  { edv: "567198", name: "Ana", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 10)] },
  { edv: "925420", name: "Carlos", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 9)] },
  { edv: "023873", name: "Fernanda", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 8)] },
  { edv: "987312", name: "Pedro", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 7)] },
  { edv: "321684", name: "Juliana", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 6)] },
  { edv: "364892", name: "Roberto", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 5)] },
  { edv: "024983", name: "Camila", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 4)] },
  { edv: "963078", name: "Lucas", team: "eCall", shiftIn: "22:35", shiftOut: "06:00", daysOff: [new Date(2026, 1, 3)] },
];

export function EmployeeProvider(props: PropsWithChildren) {
  const [employeesState, setEmployeesState] = useState<Employee[]>(employees);

  function setDayOff(employee: Employee, dayOff: Date) {
    setEmployeesState(prev => {
      return prev.map(emp => {
        if (emp.edv === employee.edv) {
          return { ...emp, daysOff: [...emp.daysOff, dayOff] };
        }
        return emp;
      });

    });

  }

  return (
    <EmployeeContext.Provider value={{ 
      setDayOff,
      employees: [...employeesState],
       }}>
      {props.children}
    </EmployeeContext.Provider>
  );
}