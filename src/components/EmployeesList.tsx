import type { Employee } from "../types/Employee";
import { EmployeeTile } from "./EmployeeTile";

interface EmployeesListProps {
  Employees: Employee[];
}

export function EmployeesList(props: EmployeesListProps) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {props.Employees.map((employee, index) => (
        <EmployeeTile key={index} employee={employee} />
      ))}
    </div>

  );
}