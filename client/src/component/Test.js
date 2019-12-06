import React from "react"

function Test(props){
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
    )
}

export default Test