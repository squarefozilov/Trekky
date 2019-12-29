import React from "react";
import "./NewsFeed.css";
let cardBodyStyles;

class NewsFeed extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
           
        }}
    handleMouseDown = (e) => {
        e.preventDefault();
        this._card_body.focus();
        this._card_body.style.position ="fixed"
    }
    handleReadClick = (e) => {
        e.preventDefault();
        window.location.href = "https://www.nydailynews.com" + this.props.href;

    }
render(){
    return (
        <div >
            <div classname="card" >
                <div className="card-header" onClick={this.handleMouseDown}>
                    {this.props.title}
                </div>
                <button onClick={this.handleReadClick}>Read</button>
                <div 
                id="relatedTarget" className="card-body"
                ref={(el) => {this._card_body = el}} 
                style={cardBodyStyles}>
                    {this.props.headline}
                </div>
            </div>
        </div>
    );
}
}

export default NewsFeed;