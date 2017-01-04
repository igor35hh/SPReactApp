import React from 'react';

const UserProfile = React.createClass({
	render: function() {
		return (
			<h1>User Profile for usedId: {this.props.params.userId}</h1>
		);
	}
});

export default UserProfile;