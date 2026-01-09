import { CalendarViewport } from "@/components/ui/CalendarViewport";
import { DayOverview } from "@/components/ui/DayOverview";
import TopBar from "@/components/ui/TopBar";


export default function Home() {
	return (
		<div className="h-full w-full flex flex-col">
			<TopBar />
			<div className="h-full w-full flex flex-col md:flex-row">
				<CalendarViewport />
				<DayOverview />
			</div>
		</div>
	);
}
