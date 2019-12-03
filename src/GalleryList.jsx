import React, { Component } from "react";

class GalleryList extends Component {
  render() {
    var slideIndex = 1;
    const items = this.props.items.map(item => {
      return (
        <div class="galleryImages">
            <img src={item.img}/>
        </div>
      )
    });
    return items;
  }

  onImageChange = event =>{

  }

  showDivs = (n) => {
      let i;
      let x = documents.getElementsByClassName("gallery");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex-1].style.display = "block";
  }

  plusDivs = (n) => {
      this.showDivs(slideIndex += n);
  }



  render() {
    return (
    <div class="gallery">
        {this.renderList()}

        <button class="Next" onClick={this.onImageChange}>Next</button>

     </div>
    );
  }
}

export default GalleryList;
