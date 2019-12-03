import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "all",
      og: "all",
      sort: "no sort",
      reset: "false"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    this.setState({type: event})
  };

  onSelectFilterType2 = event => {
      this.setState({og: event})
  }

  onFollowersSort = event => {
      this.setState({sort: event})
  }

  sortByFollowers = (item1, item2) => {

     if (this.state.sort === "no sort"){
         return 0;
     }
     else if(this.state.sort === "sort"){
        return item1.followers - item2.followers;
     }
     else if(this.state.sort == "sort2"){
         return item1.age - item2.age;
     }
  }

  reset = event => {
      this.setState({type: event})

  }

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {
    if (item.type === this.state.type){
      return true;
  } else if (this.state.type === "all"){
      return true;
    } else {
      return false;
    }
  }

  matchesFilterType2= item => {
    if (item.og === this.state.og){
      return true;
  } else if (this.state.og === "all"){
      return true;
    } else {
      return false;
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    return item.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item) && this.matchesFilterType2(item);
  }

  render() {
    return (
      <div className="filter-list">

        <h1>Vlog Squad</h1>
        {/* TODO: Add more menu items with onSelect handlers*/}
        {/* This is used to filter based on Running Events */}

        <input type="text" placeholder="Search" class="searchBar" onChange={this.onSearch} />

        <div class="dropdowns">
            <DropdownButton title="Member Status" id="dropdown-basic-button">
              <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType2}>
                All
              </Dropdown.Item>
              <Dropdown.Item eventKey="Original" onSelect={this.onSelectFilterType2}>
                Original Vlog Squad Member
              </Dropdown.Item>
              <Dropdown.Item eventKey="New" onSelect={this.onSelectFilterType2}>
                "New" Vlog Squad Memer
              </Dropdown.Item>
            </DropdownButton>

            {/* This is used to filter based on gender */}
            <DropdownButton title="Gender" id="dropdown-basic-button">
              <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType}>
                All
              </Dropdown.Item>
              <Dropdown.Item eventKey="Male" onSelect={this.onSelectFilterType}>
                Male
              </Dropdown.Item>
              <Dropdown.Item eventKey="Female" onSelect={this.onSelectFilterType}>
                Female
              </Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="Sort by Number of Followers" id="dropdown-basic-button">
              <Dropdown.Item eventKey="no sort" onSelect={this.onFollowersSort}>
                None
              </Dropdown.Item>

              <Dropdown.Item eventKey="sort" onSelect={this.onFollowersSort}>
                Sort By Popularity
              </Dropdown.Item>

              <Dropdown.Item eventKey="sort2" onSelect={this.onFollowersSort}>
                Sort By Age
              </Dropdown.Item>

            </DropdownButton>

            
        </div>

        <List items={this.props.items.filter(this.filterAndSearch).sort(this.sortByFollowers)} />

      </div>
    );
  }
}

export default FilteredList;
