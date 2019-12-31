import React from "react";
import "./NewsFeed.css";
let cardBodyStyles;

class NewsFeed extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
           
        }}
    handleCardClick = (e) => {
        e.preventDefault();
        let cardPosition = this._card_body.style.position;
        this._card_body.focus();
        if(this._card_body.style.position !== "relative"){
            this._card_body.style.position ="relative"
        } else if (cardPosition === "relative"){
            this._card_body.style.position ="absolute"
          } 
    }
    handleReadClick = (e) => {
        e.preventDefault();
        window.location.href = "https://www.nydailynews.com" + this.props.href;
    }
render(){
    return (
        <div >
            <div classname="card" >
                <div className="card-header" onClick={this.handleCardClick}>
                    {this.props.title}
                </div>
                <div 
                id="relatedTarget" className="card-body"
                ref={(el) => {this._card_body = el}} 
                style={cardBodyStyles}>
                    {this.props.headline}
                    <button onClick={this.handleReadClick}>Read</button>
                </div>
            </div>
        </div>
    );
}
}

export default NewsFeed;