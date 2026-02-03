import { useRef, useState } from "react";


interface DayControllerProps {
  startDate: Date;
  onSelectDate: (date: Date) => void;
}

export function DayController(props: DayControllerProps) {
  const startDate = useRef(props.startDate);
  const [activeDate, setActiveDate] = useState(props.startDate);

  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(startDate.current);
    date.setDate(startDate.current.getDate() + i);
    return date;
  });


  function handleDateSelect(date: Date) {
    setActiveDate(date);
    props.onSelectDate(date);
  }


  return (
    <div className="flex font-bold max-w-screen gap-2 overflow-x-scroll">
      {dates.map((date) => {
        const isActive = activeDate.toISOString() === date.toISOString();
        return (
          <div
            onClick={() => handleDateSelect(date)}
            className={`
            ${isActive ? "bg-purple-600 text-white" : "text-slate-400 border-slate-200 bg-white hover:bg-purple-50"} 
            block w-[60px] shrink-0
            border
            cursor-pointer
            py-4 text-center rounded-xl  
          `}>
            <p className={`capitalize text-xs`}>
              {date.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "")}
            </p>
            <p className="text-2xl">{date.getDate()}</p>
            <p className={`capitalize text-xs`}>
              {date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "")}
            </p>
          </div>
        )
      })}


    </div>
  );
}