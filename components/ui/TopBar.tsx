'use client'

import { useCalendarStore } from "@/store/CalendarStore";

export default function TopBar() {
	const calendarStore = useCalendarStore()
	return (
		<div className="w-full, h-32 bg-red-500">
			{
				calendarStore.currentMonthStart.getFullYear().toString()
				+ " "
				+ calendarStore.currentMonthStart.getMonth().toString()
			}
			<button onClick={calendarStore.setPrevMonth} > Prev </button>
			<button onClick={calendarStore.setNextMonth} > Next </button>
		</div>
	);
}
