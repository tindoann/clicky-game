import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav"; 
import Cards from "./Cards.json";

// By extending the React.Component class, App inherits functionality from it
class App extends Component {

  // Setting the initial state of the App component 
  // Setting this.state.cards to the cards json array
  state = {
    message: 'Click a card to start!', 
    cards: Cards, 
    score: 0, 
    highscore: 0, 
    Cards, 
  };

  // We use setState method to update a component's state

  // The render method returns the JSX that should be rendered
  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
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