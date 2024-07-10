var express = require('express');
var router = express.Router();

const apiKey = process.env.OWN_API_KEY;

router.get('/search', (req, res) => {

    const movie = 'interstellar'

    fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=fra&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            res.json(data)
        })
        .catch(err => console.error(err));
})

router.get('/', (req, res) => {

    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&language=fra&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            const travel = `https://image.tmdb.org/t/p/w500`;

            const moviesData = data.results.map(e => {
                return { title: e.original_title, poster: travel + e.poster_path, overview: e.overview.length > 250 ? (e.overview.substring(0, 250) + "...") : e.overview, voteAverage: e.vote_average, voteCount: e.vote_count }
            })
            res.json(moviesData)
        })
        .catch(err => console.error(err));
})

module.exports = router;