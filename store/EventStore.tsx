import { create } from "zustand"

type CalendarEvent = {
	name: string
}

interface EventStore {
	currentDayEvents: Array<CalendarEvent>
}

export const useEventStore = create<EventStore>((set, get) =>
(
	{
		currentDayEvents: [
			{ name: "asta" },
			{ name: "asta" },
			{ name: "asta" },
			{ name: "asta" },
			{ name: "asta" }
		]
	}
))
