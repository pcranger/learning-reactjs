import React from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: [] }


    onSearchSubmit = async (term) => {
        //make request when user submit 
        const response = await unsplash.get('/search/photos', {
            params: { query: term },

        })

        this.setState({ images: response.data.results })
    }
    //when term is passed to onSearchSubmit, we can begin making api request for this data term
    //onSearchSubmit is passed through runmewhensubmit as props



    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar runmewhensubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
export default App