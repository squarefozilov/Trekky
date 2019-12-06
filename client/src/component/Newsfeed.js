import React from "react";
import cheerio from "cheerio";
import axios from "axios";

class Newsfeed extends React.Component{

    state = {
        title: "",
        headline: ""
    }

    getNews(){
        axios.get("https://www.nydailynews.com/new-york/nyc-crime/").then(function(response){

            var $ = cheerio.load(response.data);
            // console.log(response.data);
            let results = [];
    
            $(".crd--cnt").each(function(i, element){
                var title = $(element).find(".r-mb").find("a").text();
                var headline = $(element).find("p.preview-text").text();
                if(title !== "" && headline !== ""){
                    results.push({
                        title:title,
                        headline: headline
                    })
                }
            })
            this.setState({
                title: results[0].title,
                headline: results[0].headline
            })
        }).catch(function(err){
            if (err) throw err;
        })
    
    }

    componentDidMount(){
        this.getNews()
    }

    render(){
        console.log(this.state);
        return (
            <div className="wrapper">
                <div className="card-header">
                    {this.state.title}
                </div>
                <div className="card-body">
                    {this.state.headline}
                </div>
            </div>
        )
    }
}

export default Newsfeed;