import React from 'react';
import { Link } from 'react-router';

export default function(props) {
	return (
		<div className="search">
			<header className="search-header">
				[Search title]
			</header>
			<div className="search-results">
				{props.children}
			</div>
			<footer className="search-footer">
				[Total results]
			</footer>
		</div>			
	);
}
