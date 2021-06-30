import {
	APPLY_BACKGROUND,
	CHANGE_INPUT,
	GET_ORGS,
	IS_LOADING,
	SET_ORGS,
	SHOW_MODAL
} from './action-types';

import axios from 'axios';

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

export function getOrgs(dispatch) {
	dispatch(isLoading(true));

	axios.get('/orgs')
		.then(orgs => {
			dispatch(setOrgs(orgs));
		})
		.catch(error => {
			console.error(error);
		})
		.finally(() => dispatch(isLoading(false)));
}

export function createOrg(dispatch, name) {
	dispatch(isLoading(true));
	axios.post('/orgs', { title: name })
		.then(org => {
			getOrgs(dispatch);
		})
		.catch(error => {
			console.error(error);
			dispatch(isLoading(false));
		});
}

export function isLoading(value) {
	return {
		type: IS_LOADING,
		payload: value
	};
}

export function setOrgs(value) {
	return {
		type: SET_ORGS,
		payload: value
	};
}

export function showModal(value) {
	return {
		type: SHOW_MODAL,
		payload: value
	};
}