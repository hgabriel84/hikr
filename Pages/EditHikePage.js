var Context = require("Modules/Context");

var hike = this.Parameter;

var name = hike.map(x => x.name);
var location = hike.map(x => x.location);
var distance = hike.map(x => x.distance);
var rating = hike.map(x => x.rating);
var comments = hike.map(x => x.comments);

function save() {
    Context.updateHike(hike.value.id, name.value, location.value, distance.value, rating.value, comments.value);
    router.goBack();
}

function cancel() {
  // Refresh hike value to reset dependent Observables' values
  hike.value = hike.value;
  router.goBack();
}

module.exports = {
    name: name,
    location: location,
    distance: distance,
    rating: rating,
    comments: comments,
    save: save,
    cancel: cancel
};
