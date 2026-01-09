'use client'

import { useCalendarStore } from "@/store/CalendarStore";
import { MonthName } from "@/utils/date";
import EventList from "./EventList";

export function DayOverview() {
	const calendarStore = useCalendarStore()
	const date = calendarStore.currentlySelectedDate
	let dateString = "NOTHING SELECTED"
	if (date != undefined) {
		dateString = date?.getDate().toString() + " " + MonthName(date?.getMonth()) + " " + date?.getFullYear()
	}
	return (
		<div className="flex flex-col h-[40vh] md:h-full w-full md:w-[40vw]">
			<div className="flex justify-center items-center h-16 bg-(--bg) font-bold">
				{dateString}
			</div>
			<EventList />
		</div>
	);
}
