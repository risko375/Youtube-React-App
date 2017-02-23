// import libraries

import _ from 'lodash';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// import created components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Saving Youtube api key as constant

const API_KEY = 'AIzaSyCj9ltbpSeb3NhgmsUuM0U0wNe7Y5pYqEM';

//Create a new component. This component should produce some html

class App extends Component {
    
    constructor(props){
    
        super(props);
        
        // set initial component state
        this.state = { 
            
            videos: [],
            selectedVideo: null
        };
        
        // call videoSearch with an initial search term
        this.videoSearch('surboards');
        
    }
    // this method searches youtube api with searchterm provided
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
                
                // sets component state with returned data and sets selectedVideo to first in array
                this.setState({ 
                    videos: videos,
                    selectedVideo: videos[0]
                });
            
        });
    }
    
    render() {
        // using lodash to throttle user input, method runs every 300 miliseconds 
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
        
        return (
             // renders components to DOM
            <div>
                <SearchBar onSearchTermChange={videoSearch} /> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// Take this component's generated html and put it on //the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));