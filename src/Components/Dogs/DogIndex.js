import React, { Component } from 'react';

class DogIndex extends Component {
    constructor() {
        super()
        this.state ={
            image: "",
        };
    }
    fetchImage = async () => {
        try {
            const res = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await res.json()
            this.setState({ image: data.message})
        }catch (error) {
            alert({error})
        }
    }
    componentDidMount() {
        this.fetchImage();
    }
    render() {
        return(
            <div>
                <img src={this.state.image} alt='dog' height="300px" width="300px" />
                <br />
                <button onClick={this.fetchImage}>puppy!</button>
            </div>
        )
    }
}
export default DogIndex