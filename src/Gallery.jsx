import React, { Component } from "react";
import GalleryList from "./GalleryList";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count += 1
    });
  };

  render() {
    return (
      <div className="imgGallery">
        
      </div>
    );
  }
}

export default Gallery;
