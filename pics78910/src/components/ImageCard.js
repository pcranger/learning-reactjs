//show 1 image
//handle the span of image
//span: takes how many height of cell
import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }
    //imageref = image object
    //after render
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    //a callback => arrow
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1)
        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image //destructuring

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description}
                    src={urls.regular} />
            </div>
        )
    }
}
export default ImageCard