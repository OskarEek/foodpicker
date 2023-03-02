import { error } from '@sveltejs/kit';
import { lists } from '../testData.js';

export function load({ params }) {
	const list = lists.find((list) => list.id === Number(params.id));

	if (!list) throw error(404);

	return {
		list
	};
}