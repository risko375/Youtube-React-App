A React App which utilises youtube-search-api to return videos for searched term

Uses five components:

2 class components with their own component level state:
App - this.state = { 
            
            videos: [],
            selectedVideo: null
        };
        
SearchBar - this.state = { term: ''};

3 functional components:
video_detail
video_list
video_list_item

App passes a callback down to video_list_item which onClick sets App state selectedVideo to the clicked video causing video_detail to re-render



