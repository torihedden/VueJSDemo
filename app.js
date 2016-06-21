var ToriApp = new Vue({
  el: '#app',
  data: {
    message: 'Type in the name of a movie!',
    query: '',
    favButton: false,
    title: '',
    plot: '',
    posterSrc: '',
    favorites: []
  },
  methods: {

    getMovie: function(query){
      console.log(this.message);
      $.ajax({
        dataType: 'json',
        url: 'http://www.omdbapi.com/?t=' + query + '&y=&plot=short&r=json',
        method: 'GET',
      }).done(function (data) {
        ToriApp.$set("title", data.Title);
        ToriApp.$set("plot", data.Plot);
        ToriApp.$set("posterSrc", data.Poster);
        ToriApp.$set("favButton", true);
      });
    },

    addFav: function(title){
      console.log(title);
      ToriApp.favorites.push({ fav: title})
      console.log(ToriApp.favorites)
    },

    deleteFav: function(index){
      ToriApp.favorites.splice(index, 1);
    }

  }
})
