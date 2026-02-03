import { useState } from "react";

export function DayController() {
  const dateStart = new Date(2026, 1, 1);
  const [activeDate, setActiveDate] = useState(dateStart);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(dateStart);
    date.setDate(dateStart.getDate() + i);
    return date;
  });


  return (
    <div className="flex font-bold max-w-screen gap-2 overflow-x-scroll">
      {dates.map((date) => {
        const isActive = activeDate.getDate() === date.getDate();
        return (
          <div
            onClick={() => setActiveDate(date)}
            className={`
            ${isActive ? "bg-purple-600 text-white" : "text-slate-400 border-slate-200 bg-white hover:bg-purple-50"} 
            block w-[60px] shrink-0
            border
            cursor-pointer
            py-4 text-center rounded-xl  
          `}>
          <p className={`uppercase text-xs`}>{date.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "")}</p>
            <p className="text-2xl">{date.getDate()}</p>
          </div>
        )
      })}


    </div>
  );
}