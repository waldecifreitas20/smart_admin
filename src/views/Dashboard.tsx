import { Activity, ShieldCheck, UserRoundX, WandSparkles } from "lucide-react";
import { SearchBar } from "../components/SearchBar";
import { TeamSelector } from "../components/TeamSelector";
import { PrimaryButton } from "../components/PrimaryButton";
import { OutlinedButton } from "../components/OutlinedButton";
import { DayController } from "../components/DayController";
import { useRef, useState } from "react";
import { WorkerTile } from "../components/WorkerTile";
import type { Worker } from "../types/Worker";
import { WeekController } from "../components/WeekController";


const workers: Worker[] = [
	{ edv: "51590", name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "52950", name: "Maria", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "53950", name: "João", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "54950", name: "Ana", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "55550", name: "Carlos", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "53650", name: "Fernanda", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "57450", name: "Pedro", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "54850", name: "Juliana", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "53950", name: "Roberto", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "51750", name: "Camila", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ edv: "56150", name: "Lucas", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
];

const dashboardStats = [
		{ icon: <Activity size={16} />, label: "Cobertura", value: "100%" },
		{ icon: <UserRoundX size={16} />, label: "Indiponíveis", value: "4" },
		{ icon: <ShieldCheck size={16} />, label: "Ativos", value: "35" },
	];

export function Dashboard() {
	const initialDate = useRef(new Date(2026, 1, 1));
	const [selectedDate, setSelectedDate] = useState(initialDate.current);


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
				<DayController onSelectDate={setSelectedDate}  startDate={selectedDate} />
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

			<TeamSelector />

			<div className="flex flex-col gap-4 mt-2">
				{workers.map((worker, index) => (
					<WorkerTile key={index} worker={worker} />
				))}

			</div>
		</>
	);
}