import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav"; 
import cards from "./Cards.json";

// By extending the React.Component class, App inherits functionality from it
class App extends Component {

  // setting the initial state 
  // setting this.state.cards to the cards json array
  state = {
    cards, 
    score: 0, 
    highScore: 0, 
    message: 'Click a card to start!', 
  };
  
    reset = () => {
      // if the new score is greater than the high score, 
      // change the highScore to the new score 
      if (this.state.score > this.state.highScore) {
        this.setState({highScore: this.state.score});
      }

      // rset the count 0 
      this.state.cards.forEach(cards => {
        cards.count = 0;
      });

      alert(`You lose \n score: ${this.state.score}`);

      // reset the score back to 0
      this.setState({score: 0});
      return true;
    }

    // Activity 29 from React 19 folder 
    
    // function clickCount (id) {}
    
    clickCount = id => {
      // search for the specific card in the array 
      this.state.cards.find((e, i) => {
        if (e.id === id) {

          // ??
          if(cards[i].count === 0){
            cards[i].count = cards[i].count + 1;
            this.setState({score : this.state.score + 1}, function(){
              console.log(this.state.score);
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true; 
          } else {
            this.reset();
          }
        }
      });
    }
  
   
  // The render method returns the JSX that should be rendered
  // Map over this.state.card and render a Card component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Gudetama Memory Game</Header>
        <Nav score={this.state.score} highScore={this.state.highScore} />
          {this.state.cards.map(cards => (
        <Card
            clickCount={this.clickCount}
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