import React from 'react';

function NewsFeed(props){
    return (
        <div>
            <div >
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    {props.headline}
                </div>
            </div>
        </div>
    );
}

export default NewsFeed;