//Colection:
//Provide base URL with API key
//Model will append the id

//this URL works for both a query and a specific video
// url: https://www.googleapis.com/youtube/v3/search?key={{your api key}}&part=snippet&type=video&q={{ your search query }}

var VideosCollection = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCIF-nV9qLeAriwePo8cTdgHGEuH_VAno0&part=snippet&type=video&q=',
  model: VideoModel,

  initialize: function () {
    this.on('clickedInMyView', this.wasClicked, this);
  },

  getData: function (searchQuery) {
    this.url = this.url + searchQuery;
    console.log('concatenated URL is: ' + this.url);
  },

  // parse: function (response) {
  //   console.log('invoked parse');
  //   console.log(response);
  //   return response;
  // }

});
