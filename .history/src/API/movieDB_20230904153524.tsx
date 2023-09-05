import axios from 'axios'
import React from 'react'

export const movieDB = () => {
 const instanciaMovieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'681af8c1a4306c38fb4353bdb349e16f',
        language:'es-ES'
    }
 })
 return instanciaMovieDB;
}
export default movieDB;
