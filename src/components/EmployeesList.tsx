import { EmployeeTile } from "./EmployeeTile";
import type { Employee } from "../types/Employee";

interface EmployeesListProps {
  employees: Employee[];
}

export function EmployeesList(props: EmployeesListProps) {

  return (
    <div className="flex flex-col gap-4 mt-2">
      {props.employees.map((employee, index) =>  (
        <EmployeeTile key={index} employee={employee} isDayoff={false} />
      ))}
    </div>

  );
}