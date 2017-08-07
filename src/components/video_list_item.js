import React from 'react';

const VideoListItem = (props) =>{
	const video =props.video;
	const imgUrl = video.snippet.thumbnails.default.url;
	const heading = video.snippet.title;
 return(
     <li className="list-group-item" onClick={() => props.onVideoSelected(video)}>
     <div className="video-list media">
       <div className="media-left">
       		<img src={imgUrl} alt={video.snippet.title} className="media-object"/>
       </div>
       <div className="media-body">
       		<div className="media-heading"><strong>{heading}</strong></div>
       </div>
     </div>
     </li>
 	);
}

export default VideoListItem;