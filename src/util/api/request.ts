import axios from 'axios';

// todo, multiple level json
const format = (params: {[key: string]: string}) => {
	if (process.env.REACT_APP_ENV === 'DEV') {
		return params
	}
	const data = new FormData();
	for (const index in params) {
		data.append(index, params[index])
	}
	return data
}

export const request = async (
	url: string,
	params: {[key: string]: any}
) => {
	const result: any = await axios({
		method: 'post',
		url,
		data: format(params),
		headers: {
			'Access-Control-Origin': '*',
			'X-Requested-With': 'XMLHttpRequest'
		}
	});
	return result.data
};
