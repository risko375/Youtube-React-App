//import React

import React, {Component} from 'react';

// Create SeachBar class component
class SearchBar extends Component {
    
    // constructor function sets initial component state
    constructor(props) {
    
        super(props);
        
        this.state = { term: ''};
        
    }

   // render method renders input box to DOM - searchBar is a controlled component 
   // so value of input set to state
   // onChange event onInputChange method is called with value entered into input
    
    
    render() {
    
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    
    // this method calls onSearchTermChange in App component passing in search term entered
    onInputChange(term){
    
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
  
}


export default SearchBar;