import { useState } from "react";

export function TeamSelector() {
  const teams = ["eCall", "RSA"];
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  return (
    <div className="bg-white flex shadow-md font-medium items-center border border-slate-200 rounded-lg p-1 mt-4 w-full">
      <span className="text-sm mr-2 px-2 hidden">Equipe:</span>

      {teams.map((team) => (
        <span
          onClick={() => setSelectedTeam(team)}
          key={team}
          className={`
          inline-block
          cursor-pointer
          px-6 py-2 w-full text-center
          rounded-md text-xs
          ${team == selectedTeam ? "bg-purple-600 text-white" : ""}
          `}>
          {team}
        </span>
      ))}

    </div>
  );
}