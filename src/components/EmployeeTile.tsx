import type { Employee } from "../types/Employee";

interface EmployeeTileProps {
  employee: Employee;
  isDayoff?: boolean;
}

const tileColors = {
  "T1": "bg-indigo-100 text-indigo-700",
  "T2": "bg-cyan-100 text-cyan-700",
  "T3": "bg-purple-100 text-purple-700",
  "T4": "bg-amber-100 text-amber-700",
  "Custom": "bg-slate-100 text-slate-700",
}

export function EmployeeTile(props: EmployeeTileProps) {


  return (
    <div className="
    bg-white cursor-pointer
    border border-slate-200 
    p-3 rounded-xl
    flex items-center gap-4 
    ">
      <span
        className={`
        block size-12 shrink-0
        ${tileColors[props.employee.shift.type]} 
        rounded-full uppercase
        flex items-center justify-center  
        `}
      >{props.employee.name.substring(0, 2)}</span>

      <span className="flex  items-center justify-between w-full">
        <div>
          <p className="font-bold text-slate-800">{props.employee.name}</p>
          <p className="text-xs text-slate-500">edv: {props.employee.edv}</p>
        </div>


        <p className={`
           px-3 py-1 rounded-sm text-xs ${props.isDayoff ? "text-slate-700" : tileColors[props.employee.shift.type].split(" ")[1]}
           ${props.isDayoff ? "bg-slate-100" : tileColors[props.employee.shift.type].split(" ")[0]}
          `}>{props.isDayoff ?
            "Folga" :
            `${props.employee.shift.in} - ${props.employee.shift.out}`}</p>


      </span>
    </div>
  );
}