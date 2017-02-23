//import React
import React from 'react';


// Create VideoDetail functional component to display video and details
const VideoDetail = ({video}) => {
    
    // if no data received from props from App (waiting for network request or error)component show 'Loading..'
    if (!video) {
    
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    // render video details to DOM - actual video and details
    return(
        <div className="video-detail col-md-8">  
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
    
};

// export component so it can be imported by App component

export default VideoDetail;