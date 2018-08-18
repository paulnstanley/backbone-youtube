var AppView = Backbone.View.extend({
  el: $('body'),

  collection: VideosCollection,

  events: {
    'click #search-submit': 'search',
  },

  template: Handlebars.compile($('#iframe-handlebars').html()),
    // Handlebars.compile($('#video-info').html())

  initialize: function () {
    var videosCollection = new VideosCollection();

    this.$playerDiv = this.$('.player-div');

    this.listenTo(this.model, 'change', this.renderVideo);
    this.listenTo(this.model, 'change', function(){console.log('invoked view model change listener')});
    videosCollection.on('change', function () {console.log("invoked videoView" + videosCollection.toJSON());});
  },

  search: function () {
    console.log('clicked submit');
    var videosCollection = new VideosCollection();
    var searchQuery = this.$el.find('#search-input').val();
    console.log('the search query is: ' + searchQuery);
    videosCollection.getData(searchQuery);
    videosCollection.on('change', function () {console.log(videosCollection.toJSON());}); //change to what target function?
    videosCollection.fetch();
  },

  renderVideo: function () {
    console.log('renderVideo invoked');
    $('#player-div').append(appView.render().el);
    $('#iframe').append(appView.render().el);
    // var videoView = new VideoView({ model: VideoModel });
    // this.$playerDiv.append(videoView.render().el);
  },

  // renderVideos: function () {
  //   this.model.get('videos').each(function (m) {
  //     this.renderVideo(m);
  //   }, this);
  // },

  render: function () {

    return this;
  }

});
