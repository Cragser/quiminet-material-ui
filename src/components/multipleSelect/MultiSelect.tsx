import {
	Select,
	Input,
	Chip,
	MenuItem,
	makeStyles,
	Theme,
	createStyles,
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
			maxWidth: 500,
		},
		select: {
			marginTop: '5rem',
		},
		chips: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		chip: {
			margin: 2,
			zIndex: 9999,
		},
	})
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
			marginTop: 58,
		},
	},
};

const MultiSelect = ({ options, onChange, selected }: MultiSelect) => {
	const classes = useStyles();
	// const [selectedOptions, setSelectedOptions] = useState<string[]>(value);
	const updateSelection = (selection: string[]) => {
		onChange(selection);
	};

	const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
		updateSelection(event.target.value as string[]);
	};

	const handleDeleteChip = (value: string) => {
		updateSelection(selected.filter(option => option !== value));
	};

	const getLabel = (value: string) => {
		const option = options.find(option => option.value === value) as Option;
		return option.label;
	};
	return (
		<Select
			multiple
			className={classes.select}
			value={selected}
			onChange={handleChange}
			input={<Input />}
			inputProps={{
				name: 'Country',
				id: 'filled-age-native-simple',
			}}
			MenuProps={MenuProps}
			renderValue={selected => (
				<div className={classes.chips}>
					{(selected as string[]).map(value => (
						<Chip
							key={value}
							clickable
							onDelete={() => handleDeleteChip(value)}
							label={getLabel(value)}
							className={classes.chip}
						/>
					))}
				</div>
			)}
		>
			{options.map(({ value, label }) => (
				<MenuItem key={value} value={value}>
					{' '}
					{label}{' '}
				</MenuItem>
			))}
		</Select>
	);
};

export default MultiSelect;
