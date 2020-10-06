import React from 'react';
//components
import QuoteBox from './components/QuoteBox';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: []
    }
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
        .then(quotesObj => this.setState({quotes: quotesObj.quotes}))
  }

  render(){
    return (
      <div className="App">
        {this.state.quotes.length === 0 ? <h1>Loading quotes...</h1> : <QuoteBox quotes={this.state.quotes}/>}
        <footer>
          <h5>By <a id="my-link" href="https://github.com/AnsellMaximilian">Ansell Maximilian</a></h5>
        </footer>
      </div>
    );
  }
}

export default App;
