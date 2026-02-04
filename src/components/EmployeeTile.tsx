import type { Employee } from "../types/Employee";

interface EmployeeTileProps {
  employee: Employee;
}

const bgColors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100", "bg-purple-100", "bg-pink-100"];
const textColors = ["text-blue-700", "text-green-700", "text-yellow-700", "text-red-700", "text-purple-700", "text-pink-700"];

export function EmployeeTile(props: EmployeeTileProps) {
  const selectedBackground = bgColors[Math.floor(Math.random() * bgColors.length)];
  const selectedTextColor = textColors[Math.floor(Math.random() * textColors.length)];

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
        ${selectedBackground} ${selectedTextColor}
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
           px-3 py-1 rounded-sm text-xs ${selectedTextColor}
           ${selectedBackground}
          `}>{props.employee.shiftIn} - {props.employee.shiftOut}</p>

      </span>
    </div>
  );
}