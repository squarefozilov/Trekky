import React, { useState } from "react";
import {Carousel} from "react-bootstrap"
import Test from "../Test";
import Destination from "../Destination";

function Slider(props){
        return (
            <div className="slider-container">
                <Carousel>
                    {props.crimeNews.map(news => (
                        <Carousel.Item>
                            <Test title={news.title} headline={news.headline}></Test>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
}

export default Slider;

