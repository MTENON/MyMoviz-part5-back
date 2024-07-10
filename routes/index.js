var express = require('express');
var router = express.Router();

router.get('/movies', (req, res) => {

    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&language=fra&api_key=${process.env.OWN_API_KEY}`)
        .then(response => response.json())
        .then(data => {

            // const travel = `https://image.tmdb.org/t/p/w500`;

            // const moviesData = data.results.map(e => {
            //     return { title: e.original_title, poster: travel + e.poster_path, overview: e.overview.length > 250 ? (e.overview.substring(0, 250) + "...") : e.overview, voteAverage: e.vote_average, voteCount: e.vote_count }
            // })

            res.json({ movies: data.results })

        })
        .catch(err => console.error(err));
})

module.exports = router;
