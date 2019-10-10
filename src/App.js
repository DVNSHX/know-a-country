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
		this.onClick = this.onClick.bind(this);
	}

	onSearch = (event) => {
		console.log(event.target.value);
    	this.setState({ searchfield : event.target.value });
  	}

  	onClick = () => {
  		fetch(`https://restcountries-v1.p.rapidapi.com/name/${this.state.searchfield}`, {
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

	render(){
		const {countrydata,searchfield} = this.state;
		return(
			<div className='app'>
				<Heading/>
				<SearchBox onSearch={this.onSearch} onClick={this.onClick}/>
				<SearchResults data={this.countrydata}/>
			</div>
		)
	}
}
export default App;