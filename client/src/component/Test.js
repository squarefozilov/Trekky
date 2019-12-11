import React from "react"

function Test(props){
    return (
        <div>
            <div classname="card">
                <div className="card-header">
                  <h6> {props.title}   {props.headline} </h6> 
              <br/>
                   
                </div>
            </div>
        </div>
    )
}

export default Test
//  </div> <div className="card-body">