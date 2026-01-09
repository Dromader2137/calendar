import { CalendarGrid } from "./CalendarGrid";
import { CalendarNav } from "./CalendarNav";

export function CalendarViewport() {
	return (
		<div className="flex-1 flex flex-col h-full w-full">
			<CalendarNav />
			<CalendarGrid />
		</div>
	)
}
