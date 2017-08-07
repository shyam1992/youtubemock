import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {searchedTerm:''};
		this.onInputChange = this.onInputChange.bind(this);
	}
   render(){
   	return (<div className="search-bar">
    <div className="input-group">
   <span className="input-group-addon" id="basic-addon3">Search here</span>
   	<input 
   	className="form-control"
   	type="text"
   	value={this.state.searchedTerm}
   	onChange={this.onInputChange}
   	aria-describedby="basic-addon3"
   	spellcheck="false"
   	/>
   	</div>
   	</div>
   	);
   }

   onInputChange(event){
   	this.setState({searchedTerm: event.target.value});
   	this.props.onSearchChanged(event.target.value);
   }
}

export default SearchBar;