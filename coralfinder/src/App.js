import React, {Component} from 'react'; 
import CardList from './CardList'
import SearchBox from './SearchBox'
import {Coral} from './coral'


class App extends Component {

	constructor() {
		super()
		this.state = {
			coral: Coral,
			searchfield: ''
		}
	}

onSearchChange = (event) => {
this.setState({searchfield: event.target.value}) 
}

render() {
	const filteredItems = this.state.coral.filter(coral => {
	return coral.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
	})

return (
		<div className = "tc">
			<h1>Coral Finder </h1>
			<SearchBox  searchChange = {this.onSearchChange}/>
			<CardList Coral = {filteredItems}/>
		</div>
	)
}

}

export default App;