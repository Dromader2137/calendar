'use client'

import { useCalendarStore } from "@/store/CalendarStore"

function daysInMonth(date: Date): number {
	return new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate()
}

type CalendarCellProps = {
	cellId: number
};

export const CalendarCell: React.FC<CalendarCellProps> = ({ cellId }) => {
	const calendarStore = useCalendarStore()
	const startOfCurrentMonth = calendarStore.currentMonthStart
	const startingDayOfWeek = (startOfCurrentMonth.getDay() + 6) % 7
	const dayOfMonth = cellId - startingDayOfWeek + 1
	const numberOfDays = daysInMonth(startOfCurrentMonth)
	const isInActiveMonth = dayOfMonth > 0 && dayOfMonth <= numberOfDays
	const dayOfWeek = (dayOfMonth + startingDayOfWeek + 6) % 7
	const isWeekend = dayOfWeek >= 5
	const date = new Date(startOfCurrentMonth.getFullYear(), startOfCurrentMonth.getMonth(), dayOfMonth)
	return (
		<button
			onClick={() => calendarStore.select(date)}
			className={
				`flex-1 flex items-center justify-center hover:bg-(--bg-bright) active:bg-(--bg-very-bright)
					rounded-2xl m-[0.08rem]
				${isInActiveMonth ? "bg-(--bg-muted) font-bold" : "bg-(--bg)"}
				${isWeekend ? isInActiveMonth ? "text-(--primary-bright)" : "text-(--primary)"
					: isInActiveMonth ? "" : "text-(--text-muted)"}`
			}>
			{
				date.getDate()
			}
		</button>
	)
}
