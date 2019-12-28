import React from "react";
import "./NewsCard.css";
let cardBodyStyles;
function NewsCard (props){
    function handleMouseDown () {
        console.log("dragged on")
        // cardBodyStyles = {
        //     position:'fixed'
        // }
    }
    return (
        <div>
            <div classname="card">
                <div className="card-header" onMouseDown={handleMouseDown}>
                    {props.title}
                </div>
                <div className="card-body" style={cardBodyStyles}>
                    {props.headline}
                </div>
            </div>
        </div>
    );
}

export default NewsCard;