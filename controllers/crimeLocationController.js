const CrimeLocations = require ('../model/CrimeLocations');

module.exports = {
getCrimeData: function (req, res) {
    CrimeLocations.find({}).then((result) => {
        res.json(result);
    })
}
}