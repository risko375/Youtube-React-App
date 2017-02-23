// import React 
import React from 'react';

// Create VideoListItem functional component to display a thumbnail of video and title
const VideoListItem = ({video, onVideoSelect}) => {   // {video} same as declaring const video = props.video
    
    // set thumbnail as const
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        // render thumbnail and title as list item 
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    
    );

};

// export component so it can be imported by video_list component
export default VideoListItem;