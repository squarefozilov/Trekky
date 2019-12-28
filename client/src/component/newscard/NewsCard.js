import React from "react";
import "./NewsCard.css";

function NewsCard (props){
    return (
        <div>
            <div classname="card">
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    {props.headline}
                </div>
            </div>
        </div>
    )
}

export default NewsCard;