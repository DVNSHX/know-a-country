import React from 'react';
import './SearchBox.css'

const SearchBox = (props) =>{
	return(
		<div className="searchbox">
			<input type="text" className="inputfield" onChange={props.onSearch} placeholder="Input a Country Name"/>
			<button className="btn first" onClick={props.onClick}>Search</button>
		</div>
		)
}
export default SearchBox;