import axios from 'axios';
import store from '../store';
import { getUsersSuccess, deleteUserSuccess, userProfileSuccess } from '../actions/user-actions';

export function getUsers() {
	return axios.get('http://localhost:3001/users').then(response => {
		store.dispatch(getUsersSuccess(response.data));
		return response;
	});
}

export function searchUsers(query='') {
	return axios.get('http://localhost:3001/users?q='+query).then(response => {
		store.dispatch(getUsersSuccess(response.data));
		return response;
	});
}

export function deleteUser(userId) {
	return axios.delete('http://localhost:3001/users/'+userId).then(response => {
		store.dispatch(deleteUserSuccess(userId));
		return response;
	});
}

export function getProfile(userId) {
	let profile = {};
	return axios.get('http://localhost:3001/users/'+userId).then(response => {
		let user = response.data;
		profile.name = user.name;
		profile.twitter = user.twitter;
		profile.worksOn = user.worksOn;

		return Promise.all([
			axios.get('https://api.github.com/users/'+user.github),
			axios.get('https://api.github.com/users/'+user.github+'/repos')
		]).then(results => {
			let githubProfile = results[0].data;
			let githubRepos = results[1].data;

			profile.imageUrl = githubProfile.avatar_url;
			profile.repos = githubRepos;

			store.dispatch(userProfileSuccess(profile));

			return;
		});
	});
}