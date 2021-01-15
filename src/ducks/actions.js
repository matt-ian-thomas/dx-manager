import {
	APPLY_BACKGROUND,
	CHANGE_INPUT
} from './action-types';

export function applyBackground(value) {
	return {
		type: APPLY_BACKGROUND,
		payload: value
	};
}

export function changeInput(value) {
	return {
		type: CHANGE_INPUT,
		payload: value
	};
}