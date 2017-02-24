var Observable = require("FuseJS/Observable");
var hikes = require("hikes");

var hike = Observable();

var name = hike.map(x => x.name);
var location = hike.map(x => x.location);
var distance = hike.map(x => x.distance);
var rating = hike.map(x => x.rating);
var comments = hike.map(x => x.comments);

function chooseHike(arg) {
    hike.value = arg.data;
}

module.exports = {
    hikes: hikes,
    name: name,
    location: location,
    distance: distance,
    rating: rating,
    comments: comments,

    chooseHike: chooseHike
};
