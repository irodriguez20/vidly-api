require('dotenv').config
const express = require('express')
const path = require('path')
const moviesService = require('./movies-service')

const moviesRouter = express.Router()
const bodyParser = express.json()

const movies = [
    {
        id: 1,
        name: 'Movie 1',
        genre: 'Horror',
        price: '$3'
    },
    {
        id: 2,
        name: 'Movie 2',
        genre: 'Action',
        price: '$3'
    },
    {
        id: 3,
        name: 'Movie 3',
        genre: 'Comedy',
        price: '$3'
    },

]

moviesRouter
    .route('/')
    .get((req, res, next) => {
        res.send(moviesService.getAllMovies(movies))
        next()
    })
    .post(bodyParser, (req, res, next) => {
        const { name, genre, price } = req.body
        let newMovie = {
            id: movies.length + 1,
            name: name,
            genre: genre,
            price: price,
        }

        res.send(moviesService.insertMovie(movies, newMovie))
        next()
    })

moviesRouter
    .route('/:id')
    .get(bodyParser, (req, res, next) => {
        const movie = movies.find(m => m.id === parseInt(req.params.id))
        if (!movie) { return res.status(404).send(`Movie with id ${req.params.id} not found`) }

        res.send(moviesService.getById(movie))
        next()
    })

module.exports = moviesRouter