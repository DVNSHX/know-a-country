import React from 'react';
import './SearchResults.css'

const SearchResults = (props) => {
	return(
		<div className="searchcontent">
			<ul>
				<li>Name:</li>
				<li>Capital:</li>
				<li>Region:</li>
				<li>Population:</li>
				<li>Currency:</li>
				<li>Language:</li>
			</ul>
		</div>
		)
}

export default SearchResults;