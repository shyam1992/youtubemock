import React from 'react';

const VideoDetail = (props) =>{
	if(!props.video){
		return <div> Loading... </div>;
	}
	const video = props.video;
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe title="{video.snippet.title}" allowFullScreen className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div><h4>{video.snippet.title}</h4></div>
				<div><h6>{video.snippet.description}</h6></div>
			</div>
		</div>
		);
}

export default VideoDetail;