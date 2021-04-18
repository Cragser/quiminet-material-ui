import { DayRange } from 'react-modern-calendar-datepicker';

const dateRangeToDayRange: (dateRange: DateRange) => DayRange = (
	dateRange: DateRange
) => {
	return ({
		from: {
			day: dateRange.end.getDay(),
			month: dateRange.start.getMonth(),
			year: dateRange.start.getFullYear(),
		},
		to: {
			day: dateRange.end.getDay(),
			month: dateRange.end.getMonth(),
			year: dateRange.end.getFullYear(),
		}
	})
};

export default dateRangeToDayRange;
