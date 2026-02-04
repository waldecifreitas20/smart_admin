import { EmployeeTile } from "./EmployeeTile";
import type { Employee } from "../types/Employee";

interface EmployeesListProps {
  employees: Employee[];
}

export function EmployeesList(props: EmployeesListProps) {

  if (props.employees.length === 0) {
    return (
      <>
      <p className=" w-full text-center text-slate-300 mt-4">
        Nenhum colaborador escalado para esta data.
      </p>

      <button className="mt-4 w-full text-sm text-purple-500 hover:text-purple-700">Adicionar Colaborador</button>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-4 mt-2">
      {props.employees.map((employee, index) =>  (
        <EmployeeTile key={index} employee={employee} isDayoff={false} />
      ))}
    </div>

  );
}