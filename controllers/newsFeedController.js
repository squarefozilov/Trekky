
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
    getScrapedNews:function (req,res) {
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
        res.json(results[0]);
        
        })
        
      }
}