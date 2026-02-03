import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function WeekController() {
	const [dateStart, setDataStart] = useState(new Date(2026, 1, 1));
	const dateEnd = getNextWeek(new Date(dateStart));


	function getNextWeek(date: Date) {
		return new Date(date.setDate(date.getDate() + 7));
	}

	function getPreviousWeek(date: Date) {
		return new Date(date.setDate(date.getDate() - 7));
	}

	function getFormatedDate(date: Date, showYear = false) {
		return date.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: showYear ? "numeric" : undefined
		})
	}

	return (
		<div className="bg-white text-slate-950 p-4 flex border border-slate-200 rounded-md  justify-between">
			<button
				onClick={() => setDataStart(getPreviousWeek(dateStart))}>
				<ChevronLeft />
			</button>

			<p>{getFormatedDate(dateStart)} - {getFormatedDate(dateEnd, true)}</p>

			<button
				onClick={() => setDataStart(getNextWeek(dateStart))}>
				<ChevronRight />
			</button>
		</div>
	);
}