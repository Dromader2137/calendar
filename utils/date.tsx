export function MonthName(month: number) {
	const month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
		"October", "November", "December"]
	return month_names[month % 12]
}
