var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',

  defaults: {
      videoId: '',
      title: '',
      description:'',
      channelTitle: '',
  },

  initialize: function () {
    // this.on('change:videoId', this.onChange);
  },

  // when 'reviews' come in from the server, they're an array...
  // this will set them back to being a collection
  parse: function (response) {
    var items = response.items;
    console.log('invoked parse');
    console.log(items);
    this.updateDefaults(items);
  },

  updateDefaults: function (items) {
    this.set('videoId', items[0].id.videoId);
    console.log("updateDefaults videoId: " + this.get('videoId'));
    // this.onChange();
    return this;
  },

  clicked: function () {
    console.log('Video Model says: clicked in Video View');
  }

  // onChange: function (model) {
  //   console.log('invoked onChange');
  //   console.log('onChange videoId: ' + this.get('videoId'));
  // }

//   parse: function(response) {
//     var items = response.data.items;
//     return _.pluck(items, 'video');
// }

});
