import {
	startOfWeek,
	subWeeks,
	endOfWeek,
	startOfMonth,
	subMonths,
	endOfMonth,
	startOfYear,
	endOfYear,
	subYears
} from 'date-fns';

const rangeConverter: (option: DateOptions) => DateRange = (option) => {
	const today = new Date();
	switch (option) {
		case 'custom':
			return {
				end: new Date(),
				start: new Date()
			};
		case 'thisWeek':
			return {
				end: today,
				start: startOfWeek(today)
			};
		case 'lastWeek':
			return {
				end: subWeeks(startOfWeek(today), 1),
				start: subWeeks(endOfWeek(today), 1)
			};
		case 'thisMonth':
			return {
				end: today,
				start: startOfMonth(today)
			};
		case 'lastMonth':
			return {
				end: subMonths(endOfMonth(today), 1),
				start: subMonths(startOfMonth(today), 1)
			};
		case 'thisThreeMonths':
			return {
				end: today,
				start: subMonths(startOfMonth(today), 3)
			};
		case 'lastThreeMonths':
			return {
				end: subMonths(endOfMonth(today), 1),
				start: subMonths(startOfMonth(today), 3)
			};
		case 'thisYear':
			return {
				end: today,
				start: startOfYear(today)
			};
		case 'lastYear':
			return {
				end: subYears(endOfYear(today), 1),
				start: subYears(startOfYear(today), 1)
			};
		case 'twoMonthsAgo':
			return {
				end: subMonths(endOfMonth(today), 2),
				start: subMonths(startOfMonth(today), 2)
			};
		case 'threeMonthsAgo':
			return {
				end: subMonths(endOfMonth(today), 3),
				start: subMonths(startOfMonth(today), 3)
			};
		default:
			return {
				end: new Date(),
				start: new Date()
			};
	}
};

export default rangeConverter;
