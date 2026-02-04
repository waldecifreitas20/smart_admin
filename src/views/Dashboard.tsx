import { Activity, ShieldCheck, UserRoundX, WandSparkles } from "lucide-react";
import { TeamSelector } from "../components/TeamSelector";
import { PrimaryButton } from "../components/PrimaryButton";
import { OutlinedButton } from "../components/OutlinedButton";
import { DayController } from "../components/DayController";
import { useContext, useRef, useState } from "react";
import { EmployeesList } from "../components/EmployeesList";
import { EmployeeContext } from "../provider/EmployeeProvider";
import type { EmployeeTeam } from "../types/Employee";


const dashboardStats = [
	{ icon: <Activity size={16} />, label: "Cobertura", value: "100%" },
	{ icon: <UserRoundX size={16} />, label: "Indiponíveis", value: "4" },
	{ icon: <ShieldCheck size={16} />, label: "Ativos", value: "35" },
];

export function Dashboard() {
	const { getEmployeeByTeam } = useContext(EmployeeContext);
	const [selectedTeam, setSelectedTeam] = useState<EmployeeTeam>("eCall");

	const initialDate = useRef(new Date(2026, 1, 1));
	const [selectedDate, setSelectedDate] = useState(initialDate.current);

	function generateSchedule(startDate: Date) {

	}

	function handleSelectTeam(team: EmployeeTeam) {
		setSelectedTeam(team);
	}

	return (
		<>
			{/* <SearchBar /> */}
			<div className="mt-8">
				<h1 className="text-2xl text-slate-950 font-bold">Painel de Escalas</h1>
				<p className="text-sm">Visualize e gerencie as escalas dos colaboradores ativos</p>
			</div>

			<div className="grid grid-cols-3 gap-2 mt-4">
				{dashboardStats.map((stat) => (
					<div key={stat.label}
						className="
						bg-white p-2 rounded-lg 
						shadow-sm border border-slate-100
						flex flex-col items-start h-full
						">
						<h2 className="text-sm text-slate-600 block h-full flex items-center gap-2"><span className="sm:inline">{stat.label}</span> {stat.icon}</h2>
						<p className="text-2xl text-slate-800 font-bold mt-2">{stat.value}</p>
					</div>
				))}
			</div>

			<div className="mt-10 mb-6">
				<DayController onSelectDate={setSelectedDate} startDate={selectedDate} />
			</div>


			<div className="flex gap-2 mt-6">
				<PrimaryButton>
					<WandSparkles size={16} /> Gerar Escala
				</PrimaryButton>

				<OutlinedButton>Resetar</OutlinedButton>
			</div>


			<p className="text-sm text-slate-400 mt-10 font-semibold">
				EQUIPE EM {selectedDate.toLocaleDateString("pt-BR", { day: "numeric", month: "numeric" })}
			</p>
			<TeamSelector onSelectTeam={handleSelectTeam}/>
			<EmployeesList employees={getEmployeeByTeam(selectedTeam)}/>
		</>
	);
}