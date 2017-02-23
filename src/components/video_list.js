// import React 
import React from 'react';

// import VideoListItem created 
import VideoListItem from './video_list_item';

// Create VideoList component, receives props from App component 
const VideoList = (props) => {
    
    const videoItems = props.videos.map((video) => {
     // uses map to iterate over array of videos received and calls VideoListItem component, passing props, to render each video 
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
            );
    }); 
    

    return (
    
        <ul className="col-md-4 list-group">
        // renders const created above
         {videoItems}
        </ul>
    );
}

// export component so can be imported by App component
export default VideoList;