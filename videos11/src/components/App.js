import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        //when app.js first load
        this.onTermSubmit(' ')
    }
    //receive searchterm and search
    //async await to sent "q" term to youtube api and receive items in response
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,

            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(response)
    }
    // a callback, to send rendered VideoItem back to app.js
    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    //VideoList got updated whenever state change
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            Showing {this.state.videos.length} results.
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;