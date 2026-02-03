import { Activity, ShieldCheck, UserRoundX, WandSparkles } from "lucide-react";
import { SearchBar } from "../components/SearchBar";
import { WeekController } from "../components/WeekController";
import { TeamSelector } from "../components/TeamSelector";
import { PrimaryButton } from "../components/PrimaryButton";

export function Dashboard() {
	const dashboardStats = [
		{ icon: <Activity size={16} />, label: "Cobertura", value: "100%" },
		{ icon: <UserRoundX size={16} />, label: "Indiponíveis", value: "4" },
		{ icon: <ShieldCheck size={16} />, label: "Ativos", value: "35" },
	];



	return (
		<>
			<SearchBar />
			<div className="mt-12">
				<h1 className="text-4xl text-slate-950 font-bold">Painel de Escalas</h1>
				<p>Visualize e gerencie as escalas dos colaboradores ativos</p>
			</div>

			<div className="grid grid-cols-3 gap-2 mt-8">
				{dashboardStats.map((stat) => (
					<div key={stat.label}
						className="
						bg-white p-2 rounded-lg 
						shadow-sm border border-slate-100
						flex flex-col items-start justify-bewteen h-full
						">
						<h2 className="text-sm text-slate-600 block h-full flex items-center gap-2">{stat.label} {stat.icon}</h2>
						<p className="text-2xl text-purple-500 font-bold mt-2">{stat.value}</p>
					</div>
				))}
			</div>

			<div className="mt-10">
				<WeekController />
				<TeamSelector />

				<div>
					<PrimaryButton>
						<WandSparkles size={16} /> Gerar Escalas
					</PrimaryButton>
				</div>
			</div>
		</>
	);
}