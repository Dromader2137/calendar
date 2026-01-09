type EventEntryProps = {
	eventName: string
};

export const EventEntry: React.FC<EventEntryProps> = ({ eventName }) => {
	return (
		<div className="flex justify-center items-center bg-(--bg-muted) h-12 mt-1 ml-1 mr-1 rounded-xl">
			{eventName}
		</div>
	)
}
