import React, { useState } from "react";
import {Carousel} from "react-bootstrap"
import Test from "./Test";
import Destination from "./Destination";

function Slider(props){
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Test title={props.title} headline={props.headline} />
                </Carousel.Item>
                <Carousel.Item>
                    <Destination />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Slider;