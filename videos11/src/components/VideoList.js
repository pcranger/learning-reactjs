import React from 'react'
import VideoItem from './VideoItem'

//take data from App.js
const VideoList = ({ videos, onVideoSelect }) => {
    //create a list that contains VideoItem components and map data to every VideoItem
    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })
    //return to App.js
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;
