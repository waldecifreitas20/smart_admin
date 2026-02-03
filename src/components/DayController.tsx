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
    <div className="flex max-w-screen gap-3 overflow-x-scroll">
      {dates.map((date, i) => {
        const isActive = activeDate.getDate() === date.getDate();
        return (
          <div
          onClick={() => setActiveDate(date)}
            className={`
          ${isActive ?
                "bg-purple-600 text-white" :
                "text-slate-500 border-slate-200 bg-white hover:bg-purple-50"
              } 
          block w-[80px] shrink-0
          border
          cursor-pointer
          py-6 text-center rounded-xl 
          text-purple-600 
          `}>
            <p className={`uppercase text-xs`}>{date.toLocaleDateString("pt-BR", { weekday: "short" })}</p>
            <p className="text-2xl font-bold">{date.getDay() + 1}</p>
          </div>
        )
      })}


    </div>
  );
}