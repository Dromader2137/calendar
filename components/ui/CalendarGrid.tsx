'use client'

import "@/store/CalendarStore"
import { useCalendarStore } from "@/store/CalendarStore";
import { CalendarCell } from "./CalendarCell";

function daysInMonth(date: Date): number {
	return new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate()
}

export function CalendarGrid() {
	const startOfCurrentMonth = useCalendarStore((s) => s.currentMonthStart)
	const startingDayOfWeek = (startOfCurrentMonth.getDay() + 6) % 7
	const numberOfDays = daysInMonth(startOfCurrentMonth)
	const numberOfWeeks = Math.ceil((startingDayOfWeek + numberOfDays) / 7)
	return (
		<div className="flex-1 grid grid-cols-7 bg-(--bg) p-1">
			{Array.from({ length: numberOfWeeks * 7 }).map((_, i) => (
				<CalendarCell cellId={i} key={i} />
			))}
		</div>
	);
}

