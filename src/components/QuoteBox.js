import React from 'react';

class QuoteBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          quoteObj: this.getNewQuote(),
          animation: "gradient 20s infinite"
        }
      }

    getNewQuote = () => {
        return this.props.quotes[Math.floor( Math.random() * (this.props.quotes.length) )]
    }

    updateQuote = () => {
        this.setState({
            animation: "flip 0.5s",
            quoteObj: this.getNewQuote()
        })
        setTimeout(() => {
            this.setState({
                animation: "gradient 20s infinite"
            })
        }, 500)
    }

    createTweet = () => {
        const {quote, author} = this.state.quoteObj
        return `"${quote}" - ${author}`
    }


    render(){
        return(
            <div id="quote-box" style={{animation: this.state.animation}}>
                <div id="text">
                    "{this.state.quoteObj.quote}"
                </div>
                <div id="author">
                    - {this.state.quoteObj.author}
                </div>
                
                
                <button id="new-quote" onClick={this.updateQuote}>New Quote</button>
                <a id="tweet-quote" 
                    href={`https://twitter.com/intent/tweet?text=${this.createTweet()}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Tweet this quote">
                    <i className="fa fa-twitter"></i>
                </a>
            </div>
        )
    }
}

export default QuoteBox;