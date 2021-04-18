import { useState } from 'react';
import {
	InputLabel,
	makeStyles,
	Theme,
	FormControl,
	Select,
	MenuItem,
	createStyles,
	Divider,
} from '@material-ui/core';
import DateOption from '../../util/date/options';
import rangeConverter from '../../util/date/rangeConverter';
import DateRangePicker from '../DataRangePicker/DataRangePicker';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			display: 'block',
			marginTop: theme.spacing(2),
		},
		formControl: {
			margin: theme.spacing(1),
			marginTop: 0,
			minWidth: 220,
		},
	})
);

const DateRangeSelector = ({ value, onChange }: DateRangeSelectorProps) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [selectorValue, setSelectorValue] = useState<DateOptions>('custom');
	const [customSelected, setCustomSelected] = useState(true);
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		const selected: DateOptions = event.target.value as DateOptions;
		onChange(rangeConverter(selected));
		setSelectorValue(selected);

		setCustomSelected(selected === 'custom');
	};

	const today = new Date();
	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='demo-controlled-open-select-label'>
				{DateOption.format(value.start)} - {DateOption.format(value.end)}
			</InputLabel>
			<Select
				labelId='demo-controlled-open-select-label'
				id='demo-controlled-open-select'
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				onOpen={() => {
					setOpen(true);
				}}
				value={selectorValue}
				onChange={handleChange}
			>
				<MenuItem value={'thisWeek'}>Esta semana</MenuItem>
				<MenuItem value={'lastWeek'}>Semana pasada</MenuItem>
				<MenuItem value={'thisMonth'}>Este mes</MenuItem>
				<MenuItem value={'lastMonth'}>Mes pasado</MenuItem>
				<MenuItem value={'thisThreeMonths'}>Estos tres meses</MenuItem>
				<MenuItem value={'lastThreeMonths'}>Hace tres meses</MenuItem>
				<MenuItem value={'thisYear'}>Este año</MenuItem>
				<MenuItem value={'lastYear'}>Año pasado</MenuItem>
				<Divider />
				<MenuItem value={'thisYear'}>{today.getFullYear()}</MenuItem>
				<MenuItem value={'lastYear'}>{today.getFullYear() - 1}</MenuItem>
				<Divider />
				<MenuItem value={'lastMonth'}>
					{DateOption.getMonthName(today.getMonth())}
				</MenuItem>
				<MenuItem value={'twoMonthsAgo'}>
					{DateOption.getMonthName(today.getMonth() - 1)}
				</MenuItem>
				<MenuItem value={'threeMonthsAgo'}>
					{DateOption.getMonthName(today.getMonth() - 2)}
				</MenuItem>
				<Divider />
				<MenuItem
					value={'custom'}
					onClick={() => {
						setCustomSelected(true);
					}}
				>
					Personalizado
				</MenuItem>
			</Select>
			{customSelected && <DateRangePicker value={value} onChange={onChange} />}
		</FormControl>
	);
};

export default DateRangeSelector;
