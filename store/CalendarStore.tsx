import { create } from "zustand"

interface CalendarStore {
	currentMonthStart: Date
	currentMonthEnd: () => Date
	setMonth: (date: Date) => void
	setNextMonth: () => void
	setPrevMonth: () => void
}

function startOfMonth(): Date {
	const currentDate = new Date()
	return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
}

function endOfMonth(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function nextMonth(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth() + 1, 1)
}

function prevMonth(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth() - 1, 1)
}

export const useCalendarStore = create<CalendarStore>((set, get) =>
(
	{
		currentMonthStart: startOfMonth(),
		currentMonthEnd: () => endOfMonth(get().currentMonthStart),
		setMonth: (date: Date) => set({ currentMonthStart: date }),
		setNextMonth: () => set({currentMonthStart: nextMonth(get().currentMonthStart)}),
		setPrevMonth: () => set({currentMonthStart: prevMonth(get().currentMonthStart)}),
	})
)
