'use client'

import { useEventStore } from "@/store/EventStore";
import { EventEntry } from "./EventEntry";

export default function EventList() {
	const eventStore = useEventStore()

	return (
		<div className="flex-1 flex flex-col bg-(--bg-bright) rounded-t-2xl md:rounded-tr-none">
		{
			eventStore.currentDayEvents.map((e, i) => (
				<EventEntry eventName={e.name} key={i}	/>
			))
		}
		</div>
	);
}
