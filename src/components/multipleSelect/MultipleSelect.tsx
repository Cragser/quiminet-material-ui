import {
	Button,
	Chip,
	FormControl,
	Input,
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core';
import { FC, ChangeEvent, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
		noLabel: {
			marginTop: theme.spacing(3),
		},
	})
);

interface T {
	[key: string]: boolean;
}

const groupToOption = (groups: Group[]): Option[] => {
	return groups.reduce<Option[]>(
		(acc, group) => [...acc, ...group.options],
		[]
	);
};
// {string, boolean}
const groupToState = (groups: Group[]): ButtonStatus => {
	const object: ButtonStatus = {};
	for (const group of groups) {
		object[group.label] = false;
	}
	return object;
};

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

export const MultipleSelect: FC<MultipleSelectProps> = ({ groups }) => {
	// Add 
	const classes = useStyles();
	const options: Option[] = groupToOption(groups);

	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	const [selectedButtons, setSelectedButtons] = useState<ButtonStatus>(
		groupToState(groups)
	);

	const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
		setSelectedOptions(event.target.value as string[]);
	};

	const handleDeleteChip = (value: string) => {
		setSelectedOptions(selectedOptions.filter(option => option !== value));
	};

	const getLabel = (value: string) => {
		const option = options.find(option => option.value === value) as Option;
		return option.label;
	};

	const handleGroupClick = (groupValue: string) => {
		const group = groups.find(group => group.value === groupValue) as Group;
		const groupSelection = group.options.map(option => option.value);
		if (!selectedButtons[groupValue]) {
			const newOptions = [...selectedOptions, ...groupSelection];
			setSelectedOptions(
				newOptions.filter((item, index) => newOptions.indexOf(item) === index)
			);
		} else {
			setSelectedOptions(
				selectedOptions.filter(item => !groupSelection.includes(item))
			);
		}
		setSelectedButtons({
			...selectedButtons,
			...{ [groupValue]: !selectedButtons[groupValue] },
		});
	};
	return (
		<FormControl variant='filled' className={classes.formControl}>
			<InputLabel htmlFor='filled-age-native-simple'>Age</InputLabel>
			<Select
				multiple
				className={classes.select}
				value={selectedOptions}
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
			<div>
				{groups.map(({ label, value }) => (
					<Button
						key={value}
						variant='contained'
						onClick={() => {
							handleGroupClick(value);
						}}
					>
						{label}
					</Button>
				))}
			</div>
		</FormControl>
	);
};
