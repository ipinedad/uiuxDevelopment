import React, {Component} from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return (
        <div>
            <img src={item.img}/>
            <li key={item.name}>{item.name}</li>
            <p key={item.age}>Age: {item.age}</p>
        </div>
      )
    });

    return items;
  }

  render() {
    return (
    <div class="photos">
      <ul class="photos">
        {this.renderList()}
      </ul>
     </div>
    );
  }
}

export default List;
