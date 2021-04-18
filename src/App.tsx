import React, { useState } from 'react';
import './App.css';
import DateRangePicker from './components/DataRangePicker/DataRangePicker';
import DateRangeSelector from './components/DateRangeSelector/DateRangeSelector';
import { MultipleSelect } from './components/multipleSelect/MultipleSelect';

const groups: Group[] = [
	{
		label: 'América',
		value: '11',
		options: [
			{
				value: '11',
				label: 'México',
			},
			{
				value: '33',
				label: 'Estados Unidos de América',
			},
		],
	},
  {
		label: 'Europa',
		value: '22',
		options: [
			{
				value: '22',
				label: 'España',
			},
		],
	},
];

function App() {
	// const [selected, setSelected] = useState<string[]>([])
	// const onUpdate = (data: string[]) => {
	// 	setSelected(data);
	// }
	const [date, setDate] = useState<DateRange>({
		start: new Date(),
		end: new Date(),
	})
	const onChange = (dateRange: DateRange) => {
		setDate(dateRange);
	}
	return <DateRangeSelector value={date} onChange={onChange} />;
	// return <DateRangePicker value={date} onChange={onChange} />;
}

export default App;
