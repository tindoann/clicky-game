import React, {Component} from 'react'; 
import Card from './Card'; 
import Card from './Card.json'; 
import shuffle from 'shuffle-array'; 

class CardContainer extends Component {
  state = {
    score: 1, 
    card: Cards, 
    selectedId: []
  }; 
}

  // shuffle array function
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let listArray = array[i];
        array[i] = array[j];
        array[j] = listArray;
    };
};

// when the user clicks on a card

handleClick = (event) => {

  // grab the selected id
  let id = event.target.id; 

  // initial var that matches the selected card
  let match = false; 

  
  // iterate through selcted card and checks if any ids match selected id
  this.state.selectedId.forEach(item => {

    // if id matches 
    if (item.id === id) {

      // change match to true
      match = true; 
    }
  });
}