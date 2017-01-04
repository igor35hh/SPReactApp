import React from 'react';

const Home = React.createClass({
	render: function() {
		return (
			<div className="home-page">
				<h1>The SP react app</h1>
				<p>
					When you need to route between different parts of your React application, 
					you'll probably need a router. The most popular choice to do this in React is React Router. 
				</p>
				<p>	
					If you are familiar with routing in Ember, 
					you'll get your routing up and running with React Router in no time.
				</p>
			</div>
		);
	}
});

export default Home;