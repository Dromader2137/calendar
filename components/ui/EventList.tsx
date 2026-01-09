'use client'

import { useEventStore } from "@/store/EventStore";

export default function EventList() {
	const eventStore = useEventStore()

	return (
		<div className="flex-1 flex flex-col bg-(--bg-bright) rounded-t-[1em] md:rounded-tr-none">
		{
			eventStore.currentDayEvents.map((e, i) => (
				<div className="flex justify-center items-center" key={i}>
				{e.name}
				</div>
			))
		}
		</div>
	);
}
