import { DayRange } from 'react-modern-calendar-datepicker';

const dayRangeToDateRange: (dayRange: DayRange) => DateRange = (
		dayRange: DayRange
) => ({
	start: new Date(
		Number(dayRange.from?.year),
		Number(dayRange.from?.month),
		Number(dayRange.from?.day),
	),
	end: new Date(
		Number(dayRange.to?.year),
		Number(dayRange.to?.month),
		Number(dayRange.to?.day),
	)
});

export default dayRangeToDateRange;
