import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard'
import axios from 'axios'

const sampleSimpson = {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
}


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        quote: sampleSimpson
      }
      this.getQuote = this.getQuote.bind(this)
    }

    getQuote() {
      axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=1')
        .then(response => response.data)
        .then(data => {
          this.setState({quote: data[0]});
      });
    }


  render() {
    return (
      <>
        <QuoteCard quote= {this.state.quote}/>
        <button type="button" onClick={this.getQuote}>Get new quote</button>
      </>
    );
  }
}

export default App;
