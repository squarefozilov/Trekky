import React, { useState } from "react";
import {Carousel} from "react-bootstrap"
import Test from "../Test";
import Destination from "../Destination";
import "./Slider.css";

function Slider(props){
        return (
            <div className="slider-container">
                <div className="col-md-8 offset-md-2 col-sm-12">
                <Carousel className="slider">
                    {props.crimeNews.map(news => (
                        <Carousel.Item>
                            <Test title={news.title} headline={news.headline}></Test>
                        </Carousel.Item>
                    ))}
                </Carousel>
                </div>
            </div>
        )
}

export default Slider;

