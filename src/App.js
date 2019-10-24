import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Cards from "./cards.json";

class App extends Component {
  // Setting the initial state 
  state = {
    message: 'Click a card to start!', 
    cards: Cards, 
    score: 0, 
    highScore: 0, 
    Cards, 
    id: []
  };

  // Function to restart to initial state on click
  handleButtonClick = event => {
    event.preventDefault(); 
    this.setState({
    message: 'Click a card to start!', 
    cards: Cards, 
    score: 0, 
    highScore: 0, 
    Cards, 
    id: [] 
    }); 
  }; 


  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(cards => (
          <Card
            id={cards.id}
            key={cards.id}
            image={cards.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


