import React from 'react';
import './SearchBox.css'

const SearchBox = (props) =>{
	return(
		<div className="searchbox">
			<input type="text" className="inputfield" placeholder="Input a Country Name"/>
			<button className="btn first" onClick={props.onSearch}>Search</button>
		</div>
		)
}
export default SearchBox;