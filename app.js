var ToriApp = new Vue({
  el: '#app',
  data: {
    message: 'Type in the name of a movie!',
    query: '',
    favButton: false,
    title: '',
    plot: '',
    posterSrc: '',
    rating: '',
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
        console.log(data);
        ToriApp.$set("title", data.Title);
        ToriApp.$set("plot", data.Plot);
        ToriApp.$set("posterSrc", data.Poster);
        ToriApp.$set("rating", data.Rated);
        ToriApp.$set("favButton", true);
      });
    },

    addFav: function(title, rating){
      console.log(title);
      ToriApp.favorites.push({ fav: title, rate: rating})
      console.log(ToriApp.favorites)
    },

    deleteFav: function(index){
      ToriApp.favorites.splice(index, 1);
    }

  }
})
