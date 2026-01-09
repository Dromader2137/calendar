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
	const startOfCurrentMonth = useCalendarStore((s) => s.currentMonthStart)
	const startingDayOfWeek = (startOfCurrentMonth.getDay() + 6) % 7
	const numberOfDays = daysInMonth(startOfCurrentMonth)
	return (
		<div className="border border-black flex-1 items-center justify-center bg-amber-500 ">
			{
				cellId - startingDayOfWeek + 1 > 0
					&& cellId - startingDayOfWeek + 1 <= numberOfDays
					? cellId - startingDayOfWeek + 1
					: 0
			}
		</div>
	)
}
