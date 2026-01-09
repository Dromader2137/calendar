'use client'

import { useCalendarStore } from "@/store/CalendarStore";
import { MonthName } from "@/utils/date";
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';

export function CalendarNav() {
	const calendarStore = useCalendarStore()
	return (
		<div className="w-full flex justify-center items-center h-16 bg-(--bg)">
			<button className='hover:bg-(--bg-bright) rounded-full p-2' onClick={calendarStore.setPrevMonth} > 
			<UndoOutlinedIcon fontSize="large" />
			</button>
			<div className="font-bold ml-10 mr-10">{
				MonthName(calendarStore.currentMonthStart.getMonth())
				+ " "
				+ calendarStore.currentMonthStart.getFullYear().toString()
			}</div>
			<button className='hover:bg-(--bg-bright) rounded-full p-2' onClick={calendarStore.setNextMonth} > 
			<RedoOutlinedIcon fontSize="large" />
			</button>
		</div>
	);
}
