module.exports = {
    convertAddtoLatLng: function(req,res) {
        // const address = req.body.address;
        const apiKey = "AIzaSyA-VspoF45DKRHLsuzBL0-hecHDNOUQdOY"
        axios.get("https://maps.googleapis.com/maps/api/geocode/"+'1600+Amphitheatre+Parkway,+Mountain+View,+CA&' +apiKey)
            .then(function(response){
                res.json(response.data);
            }).catch(function(err){
                if (err) console.log(err);
            })
        console.log("a");
    }
}