import { useState } from "react";

export function TeamSelector() {
  const teams = ["eCall", "RSA"];
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  return (
    <div
      className="
      flex
      font-medium items-center 
      mt-4 w-full gap-2
      ">
      <span className="text-sm mr-2 px-2 hidden">Equipe:</span>

      {teams.map((team) => (
        <span
          onClick={() => setSelectedTeam(team)}
          key={team}
          className={`
          block
          cursor-pointer
          px-8 py-2 w-fit text-center
          text-xs transition-all duration-400
          border  rounded-full
          ${team == selectedTeam ? "bg-purple-600 text-white border-purple-600 shadow-xl" : "text-slate-300"}
          `}>
          {team}
        </span>
      ))}

    </div>
  );
}