import { CalendarGrid } from "@/components/ui/CalendarGrid";
import { DayOverview } from "@/components/ui/DayOverview";
import TopBar from "@/components/ui/TopBar";


export default function Home() {
	return (
		<div className="h-full w-full flex flex-col">
			<TopBar />
			<div className="h-full w-full flex flex-col lg:flex-row">
				<CalendarGrid />
				<DayOverview />
			</div>
		</div>
	);
}
