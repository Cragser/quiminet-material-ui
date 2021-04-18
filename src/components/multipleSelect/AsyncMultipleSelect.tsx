import { useEffect, useState } from 'react';
import { request } from '../../util/api/request';
import { MultipleSelect } from './MultipleSelect';

const AsyncMultipleSelect = ({
	onChange,
	selected,
	url,
	data,
}: AsyncMultipleSelectProps) => {
	const [groups, setGroups] = useState<Group[]>([]);
	useEffect(() => {
		(async () => {
			const result = await request(url, data);
			setGroups(result.data);
		})();
	}, [data, url]);

	return (
		<MultipleSelect groups={groups} onChange={onChange} selected={selected} />
	);
};

export default AsyncMultipleSelect;
