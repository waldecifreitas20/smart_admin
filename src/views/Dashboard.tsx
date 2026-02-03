import { Activity, ShieldCheck, UserRoundX, WandSparkles } from "lucide-react";
import { SearchBar } from "../components/SearchBar";
import { TeamSelector } from "../components/TeamSelector";
import { PrimaryButton } from "../components/PrimaryButton";
import { OutlinedButton } from "../components/OutlinedButton";
import { DayController } from "../components/DayController";
import { useState } from "react";
import { WorkerTile } from "../components/WorkerTile";


const workers = [
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
	{ name: "Waldeci", team: "eCall", shiftIn: "22:35", shiftOut: "06:00" },
];

export function Dashboard() {
	const dashboardStats = [
		{ icon: <Activity size={16} />, label: "Cobertura", value: "100%" },
		{ icon: <UserRoundX size={16} />, label: "Indiponíveis", value: "4" },
		{ icon: <ShieldCheck size={16} />, label: "Ativos", value: "35" },
	];

	const [selectedDate, setSelectedDate] = useState(new Date(2026, 1, 1));

	return (
		<>
			<SearchBar />
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
						flex flex-col items-start justify-bewteen h-full
						">
						<h2 className="text-sm text-slate-600 block h-full flex items-center gap-2"><span className="hidden sm:inline">{stat.label}</span> {stat.icon}</h2>
						<p className="text-2xl text-purple-500 font-bold mt-2">{stat.value}</p>
					</div>
				))}
			</div>

			<div className="mt-10 mb-6">
				<DayController startDate={selectedDate} onSelectDate={setSelectedDate} />
			</div>

			<TeamSelector />

			<div className="flex gap-2 mt-6">
				<PrimaryButton>
					<WandSparkles size={16} /> Gerar Escalas
				</PrimaryButton>

				<OutlinedButton>Resetar</OutlinedButton>
			</div>


			<p className="text-sm text-slate-400 mt-10 font-semibold">
				EQUIPE EM {selectedDate.toLocaleDateString("pt-BR", { day: "numeric", month: "numeric" })}
			</p>

			<div className="flex flex-col gap-2 mt-2">
				{workers.map((worker, index) => (
					<WorkerTile key={index} worker={worker} />
				))}

			</div>
		</>
	);
}