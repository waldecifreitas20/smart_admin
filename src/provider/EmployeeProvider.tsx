import { createContext, useState, type PropsWithChildren } from "react";
import type { Employee, EmployeeTeam } from "../types/Employee";
import { EMPLOYEES } from "../mock/employees";

export const EmployeeContext = createContext({
  setDayOff: (_employee: Employee, _dayOff: Date) => { },
  employees: [] as Employee[],
  getEmployeeByTeam: (_team: EmployeeTeam) => [] as Employee[],
});


export function EmployeeProvider(props: PropsWithChildren) {
  const [employeesState, setEmployeesState] = useState<Employee[]>(EMPLOYEES);

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