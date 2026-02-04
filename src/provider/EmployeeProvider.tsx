import { createContext, useState, type PropsWithChildren } from "react";
import type { Employee, EmployeeTeam } from "../types/Employee";
import { EMPLOYEES } from "../mock/employees";

export const EmployeeContext = createContext({
  setDayOff: (_employee: Employee, _dayOff: Date) => { },
  employees: [] as Employee[],
  getEmployeeByTeam: (_team: EmployeeTeam) => [] as Employee[],
  generateSchedule: (_startDate: Date, _team: EmployeeTeam) => [] as Employee[],
});


export function EmployeeProvider(props: PropsWithChildren) {
  const [employees, setEmployees] = useState<Employee[]>(EMPLOYEES);

  function setDayOff(employee: Employee, dayOff: Date) {
    setEmployees(prev => {
      return prev.map(emp => {
        if (emp.edv === employee.edv) {
          return { ...emp, daysOff: [...emp.daysOff, dayOff] };
        }
        return emp;
      });

    });

  }


  function getEmployeeByTeam(team: EmployeeTeam) {
    return employees.filter(emp => emp.team === team);
  }

  	function generateSchedule(startDate: Date, team: EmployeeTeam) {
		const schedule: Employee[] = [];

    const teamEmployees = getEmployeeByTeam(team);
    
    return teamEmployees;
  }

  return (
    <EmployeeContext.Provider value={{
      setDayOff,
      employees: [...employees],
      getEmployeeByTeam,
      generateSchedule
    }}>
      {props.children}
    </EmployeeContext.Provider>
  );
}