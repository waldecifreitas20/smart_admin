import { useState } from "react";
import type { EmployeeTeam } from "../types/Employee";


interface TeamSelectorProps {
  onSelectTeam: (team: EmployeeTeam) => void;
}


export function TeamSelector(props: TeamSelectorProps) {
  const teams: EmployeeTeam[] = ["eCall", "RSA"];
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);


  function handleSelectTeam(team: EmployeeTeam) {
    setSelectedTeam(team);
    props.onSelectTeam(team);
  }

  return (
    <div
      className="
      flex
      font-medium items-center 
      mt-4 w-full gap-2
      ">
      {teams.map((team) => (
        <button
          onClick={() => handleSelectTeam(team)}
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
        </button>
      ))}

    </div>
  );
}