import {
	APPLY_BACKGROUND,
	CHANGE_INPUT,
	GET_ORGS,
	HIDE_MODAL,
	IS_LOADING,
	SET_ORGS,
	SHOW_MODAL,
	TOGGLE_DROP_DOWN
} from './action-types';

import axios from 'axios';

export function changeInput(inputId, value) {
	return {
		type: CHANGE_INPUT,
		inputId: inputId,
		payload: value
	};
}

export function getOrgs(dispatch) {
	dispatch(isLoading(true, 'nonScratchOrgs', 'scratchOrgs'));
	axios.get('/orgs')
		.then(orgs => {
			dispatch(setOrgs(orgs));
		})
		.catch(error => {
			console.error(error);
		})
		.finally(() => dispatch(isLoading(false, 'nonScratchOrgs', 'scratchOrgs')));
}

export function createOrg(dispatch, alias, duration) {
	dispatch(isLoading(true, 'scratchOrgs'));
	axios.post('/orgs', {alias})
		.then(org => {
			console.log(org);
			dispatch(hideModal("createOrg"));
			getOrgs(dispatch);
		})
		.catch(error => {
			console.error(error);
			dispatch(isLoading(false, 'scratchOrgs'));
		});
}

export function isLoading(value, scope='global', ...scopes) {
	let payload = { 
		[scope] : value
	};

	if (scopes) {	
		scopes.forEach(name => {
			payload[name] = value
		});
	}
	return {
		type: IS_LOADING,
		payload
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

export function hideModal(value) {
	return {
		type: HIDE_MODAL,
		payload: value
	};
}

export function toggleDropDown(key, index) {
	return {
		type: TOGGLE_DROP_DOWN,
		payload: {
			key, index
		}
	}
}