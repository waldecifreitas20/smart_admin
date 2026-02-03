import { ArrowRightLeft, LogOut, PanelsRightBottom, UsersRound } from "lucide-react";
import { useState, type ReactElement } from "react";

type MenuOption = {
	label: string;
	icon: ReactElement;
}

export function Menu() {
	const options: MenuOption[] = [
		{ label: "Dashboard", icon: <PanelsRightBottom size={16} /> },
		{ label: "Colaboradores", icon: <UsersRound size={16} /> },
		{ label: "Solicitações", icon: <ArrowRightLeft size={16} /> },
		{ label: "Sair", icon: <LogOut size={16} /> }
	];
	const [selectedOption, setSelectedOption] = useState<MenuOption>(options[0]);

	function onSelectOption(option: MenuOption) {
		setSelectedOption(option);
	}

	return (
		<aside className="bg-white py-2 px-4 border-t border-slate-200  fixed bottom-0 w-full shadow-top shadow-2xl">
			<nav>
				<ul className="flex">
					{options.map((option) => (
						<li
							onClick={() => onSelectOption(option)}
							key={option.label}
							className={`
							w-full
							p-2 rounded-md text-xs
							${selectedOption.label === option.label ? 'bg-purple-100 text-purple-600' : 'text-slate-400 hover:text-purple-400 '}
							
							cursor-pointer 
							flex flex-col gap-1 items-center
							`}>
							{option.icon}
							{option.label}
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}