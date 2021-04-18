import React from 'react';
import './App.css';
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
	return <MultipleSelect groups={groups} />;
}

export default App;
