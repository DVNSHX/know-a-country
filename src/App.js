import React from 'react';
import Heading from './Heading';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import './App.css';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			countrydata:{},
			searchfield:'',
		}
		this.onSearch = this.onSearch.bind(this);
	}

	componentDidUpdate(){
		fetch(`https://restcountries-v1.p.rapidapi.com/name/${this.searchfield}`, {
		"method": "GET",
		"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "53f8aab6bdmsh7b1a60979e0e6f5p18e3a1jsn6dd4b85a62b8"
		}
	})
	.then(response => response.json())
	.then(data => {this.setState({countrydata:data})
	})
	.catch(err => console.log(err));
}

	onSearch = (event) => {
		console.log(event.target.value);
    	this.setState({ searchfield: event.target.value });
  	}

	render(){
		const {countrydata,searchfield} = this.state;
		console.log(countrydata)
		return(
			<div className='app'>
				<Heading/>
				<SearchBox onsearch={this.onSearch}/>
				<SearchResults/>
			</div>
		)
	}
}
export default App;