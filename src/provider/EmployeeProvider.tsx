import { createContext, useState, type PropsWithChildren } from "react";
import type { Employee, EmployeeTeam } from "../types/Employee";

export const EmployeeContext = createContext({
  setDayOff: (_employee: Employee, _dayOff: Date) => { },
  employees: [] as Employee[],
  getEmployeeByTeam: (_team: EmployeeTeam) => [] as Employee[],
});

const employees: Employee[] = [
  { edv: "687363", name: "Waldeci Freitas", team: "eCall", shift: "T3", daysOff: [new Date(2026, 1, 13)] },
  { edv: "999999", name: "Maria Souza", team: "eCall", shift: "T2", daysOff: [new Date(2026, 1, 12)] },
  { edv: "465182", name: "João Marcos", team: "eCall", shift: "T1", daysOff: [new Date(2026, 1, 11)] },
  { edv: "567198", name: "Ana Lucia", team: "eCall", shift: "T3", daysOff: [new Date(2026, 1, 10)] },
  { edv: "925420", name: "Carlos Almeida", team: "eCall", shift: "T2", daysOff: [new Date(2026, 1, 9)] },
  { edv: "023873", name: "Fernanda Campos", team: "eCall", shift: "T1", daysOff: [new Date(2026, 1, 8)] },
  { edv: "987312", name: "Pedro Loos", team: "eCall", shift: "T2", daysOff: [new Date(2026, 1, 7)] },
  { edv: "321684", name: "Juliana Carvalho", team: "eCall", shift: "T3", daysOff: [new Date(2026, 1, 6)] },
  { edv: "364892", name: "Roberto Vilela", team: "eCall", shift: "T1", daysOff: [new Date(2026, 1, 5)] },
  { edv: "024983", name: "Camila Souza", team: "eCall", shift: "T2", daysOff: [new Date(2026, 1, 4)] },
  { edv: "963078", name: "Lucas Santana", team: "eCall", shift: "T3", daysOff: [new Date(2026, 1, 3)] },

  { edv: "107363", name: "Roberto Silva", team: "RSA", shift: "T1", daysOff: [new Date(2026, 1, 13)] },
  { edv: "109999", name: "Maria Silva", team: "RSA", shift: "T2", daysOff: [new Date(2026, 1, 12)] },
  { edv: "105182", name: "João Oliveira", team: "RSA", shift: "T3", daysOff: [new Date(2026, 1, 11)] },
  { edv: "107198", name: "Ana Costa", team: "RSA", shift: "T2", daysOff: [new Date(2026, 1, 10)] },
  { edv: "105420", name: "Carlos Santos", team: "RSA", shift: "T1", daysOff: [new Date(2026, 1, 9)] },
  { edv: "103873", name: "Fernanda Almeida", team: "RSA", shift: "T3", daysOff: [new Date(2026, 1, 8)] },
  { edv: "107312", name: "Pedro Lima", team: "RSA", shift: "T2", daysOff: [new Date(2026, 1, 7)] },
  { edv: "101684", name: "Juliana Pereira", team: "RSA", shift: "T3", daysOff: [new Date(2026, 1, 6)] },
  { edv: "104892", name: "Roberto Mendes", team: "RSA", shift: "T1", daysOff: [new Date(2026, 1, 5)] },
  { edv: "104983", name: "Camila Silva", team: "RSA", shift: "T2", daysOff: [new Date(2026, 1, 4)] },
  { edv: "103078", name: "Lucas Oliveira", team: "RSA", shift: "T3", daysOff: [new Date(2026, 1, 3)] },
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


  function getEmployeeByTeam(team: EmployeeTeam) {
    return employeesState.filter(emp => emp.team === team);
  }

  return (
    <EmployeeContext.Provider value={{
      setDayOff,
      employees: [...employeesState],
      getEmployeeByTeam,
    }}>
      {props.children}
    </EmployeeContext.Provider>
  );
}