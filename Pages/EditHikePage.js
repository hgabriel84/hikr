var hike = this.Parameter;

var name = hike.map(x => x.name);
var location = hike.map(x => x.location);
var distance = hike.map(x => x.distance);
var rating = hike.map(x => x.rating);
var comments = hike.map(x => x.comments);

function goBack() {
    router.goBack();
}

module.exports = {
    name: name,
    location: location,
    distance: distance,
    rating: rating,
    comments: comments,
    goBack: goBack
};
