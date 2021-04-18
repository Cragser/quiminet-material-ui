import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, DayRange } from 'react-modern-calendar-datepicker';
import esCustomLocal from '../../util/date/locale/es';
import dayRangeToDateRange from '../../util/date/dayRangeToDateRange';
import dateRangeToDayRange from '../../util/date/dateRangeToDayRange';
import { useState } from 'react';

const DateRangePicker = ({ value, onChange }: DateRangePickerProps) => {
	const [selectedDayRange, setSelectedDayRange] = useState<DayRange>(
		dateRangeToDayRange(value)
	);

	const onUpdate = (date: DayRange) => {
		setSelectedDayRange(date);
		onChange(dayRangeToDateRange(date));
	};

	return (
		<Calendar
			value={selectedDayRange}
			onChange={onUpdate}
			shouldHighlightWeekends
			locale={esCustomLocal}
		/>
	);
};

export default DateRangePicker;
