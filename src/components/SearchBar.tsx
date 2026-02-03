import { Search } from "lucide-react";

export function SearchBar() {
	return (
		<form className="bg-white shadow-sm p-3 border gap-4 border-slate-100 flex rounded-full items-center justify-between">
			<button className="cursor-pointer hover:text-purple-400">
				<Search />
			</button>
			<input type="text" className="border-l border-slate-100 text-slate-800 indent-4 w-full block outline-none" />
		</form>
	);
}