import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav"; 
import cards from "./Cards.json";

// By extending the React.Component class, App inherits functionality from it
class App extends Component {

  // Setting the initial state of the App component 
  // Setting this.state.cards to the cards json array
  state = {
    cards: cards, 
    score: 0, 
    highScore: 0, 
    message: 'Click a card to start!', 
  };
  
    gameOver = () => {
      if (this.state.score > this.state.highScore) {
        this.setState({highScore: this.state.score});
      }
      // loop though each card 
      this.state.cards.forEach(cards => {
        cards.count = 0;
      });
      alert(`You lose \n score: ${this.state.score}`);
      // reset the score back to 0
      this.setState({score: 0});
      return true;
    }
  
   
  // The render method returns the JSX that should be rendered
  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}>Clicky Game</Header>
        <Nav />
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