import {
	Button,
	FormControl,
	InputLabel,
} from '@material-ui/core';
import { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MultiSelect from './MultiSelect';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			// minWidth: 120,
			// maxWidth: 500,
		},
		activeGroup: {
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'red',
		},
	})
);

const groupToOption = (groups: Group[]): Option[] => {
	return groups.reduce<Option[]>(
		(acc, group) => [...acc, ...group.options],
		[]
	);
};

const createInternalGroup = (groups: Group[]): InternalGroup[] => {
	return groups.map(group => ({ ...group, ...{ status: false } }));
};

export const MultipleSelect: FC<MultipleSelectProps> = ({
	groups,
	onChange,
	selected
}) => {
	const classes = useStyles();
	const options: Option[] = groupToOption(groups);
	const [internalGroups, setInternalGroups] = useState<InternalGroup[]>(
		createInternalGroup(groups)
	);

	const updateSelection = (selection: string[]) => {
		onChange(selection);
	};


	const handleGroupClick = (groupSelected: InternalGroup) => {
		const groupSelection = groupSelected.options.map(option => option.value);
		if (!groupSelected.status) {
			const newOptions = [...selected, ...groupSelection];
			updateSelection(newOptions.filter(item => newOptions.includes(item)));
		} else {
			updateSelection(
				selected.filter(item => !groupSelection.includes(item))
			);
		}

		for (const i in internalGroups) {
			if (internalGroups[i].value === groupSelected.value) {
				internalGroups[i].status = !internalGroups[i].status;
			}
		}
		setInternalGroups(internalGroups);
	};
	return (
		<FormControl variant='filled' className={classes.formControl}>
			<InputLabel htmlFor='filled-age-native-simple'>Age</InputLabel>
			<MultiSelect options={options} selected={selected} onChange={onChange}/>
			<div>
				{internalGroups.map(group => (
					<Button
						key={group.value}
						variant='contained'
						className={group.status === true ? classes.activeGroup : ''}
						onClick={() => {
							handleGroupClick(group);
						}}
					>
						{group.label}
					</Button>
				))}
			</div>
		</FormControl>
	);
};
