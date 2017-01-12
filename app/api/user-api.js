import axios from 'axios';

export function getUsers() {
	return axios.get('http://localhost:3001/users').then(response => response.data);
}

export function deleteUser(userId) {
	return axios.delete('http://localhost:3001/users/'+userId);
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

			return profile;
		});
	});
}