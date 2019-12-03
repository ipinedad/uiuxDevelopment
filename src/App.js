import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";


import Item1 from './imgs/david.jpg'
import Item2 from './imgs/jason.jpg'
import Item3 from './imgs/natalie.jpg'
import Item4 from './imgs/liza.jpg'
import Item5 from './imgs/scotty.jpg'
import Item6 from './imgs/toddy.jpg'
import Item7 from './imgs/carly.jpg'
import Item8 from './imgs/alex.jpg'
import Item9 from './imgs/erin.jpg'
import Item10 from './imgs/zane.jpg'
import Item11 from './imgs/heath.jpeg'
import Item12 from './imgs/jeff.jpg'
import Item13 from './imgs/corinna.jpeg'
import Item14 from './imgs/mariah.jpeg'
import Item15 from './imgs/matt.jpg'
import Item16 from './imgs/dom.jpg'
import Item17 from './imgs/josh.png'

const runners = [
  { name: "David Dobrik", type: "Male", og: "Original", followers: 1, img: Item1, age: 23},
  { name: "Jason Nash", type: "Male", og: "Original", followers: 10, img: Item2, age: 46},
  { name: "Natalie Mariduena", type: "Female", og: "New", followers: 7, img: Item3, age: 23},
  { name: "Liza Koshy", type: "Female", og: "Original", followers: 2, img: Item4, age: 23},
  { name: "Scotty Sire", type: "Male", og: "Original", followers: 6, img: Item5, age: 27},
  { name: "Toddy Smith", type: "Male", og: "Original", followers: 9, img: Item6 , age: 28},
  { name: "Carly Incontro", type: "Female", og: "Original",followers: Item7, img: Item7, age: 28},
  { name: "Alex Ernst", type: "Male", og: "Original", followers: 11 , img: Item8, age: 23},
  { name: "Erin Gilfoy", type: "Female", og: "Original", followers: 15, img: Item9, age: 28},
  { name: "Zane Hijazi", type: "Male", og: "Original", followers: 4, img: Item10, age: 27 },
  { name: "Heath Hussar", type: "Male", og: "Original", followers: 12, img: Item11, age: 26 },
  { name: "Jeff Wittek", type: "Male", og: "New", followers: 8, img: Item12, age: 29 },
  { name: "Corinna Kopf", type: "Female", og: "Original", followers: 5, img: Item13,age: 24 },
  { name: "Mariah Amoto", type: "Female" , og: "New", followers: 16, img: Item14,age: 25},
  { name: "Matt King", type: "Male" , og: "New", followers: 13, img: Item15, age: 27},
  { name: "Dom Zeglaitis", type: "Male" , og: "Original", followers: 17, img: Item16, age: 24},
  { name: "Josh Peck", type: "Male" , og: "New", followers: 3, img: Item17, age: 33}
];

const images = [
    { name: "img1", img: Item1},
    { name: "img2", img: Item2},
    { name: "img3", img: Item3}
];


class App extends Component {
  render() {
    return (
      <div className="App">

        {/*TODO (FilteredList): create an instance of the FilteredList Component with a variable named items that takes in your produce list*/}
        <FilteredList items={runners}/>

      </div>
    );
  }
}

export default App;
