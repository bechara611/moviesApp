import React, { useEffect, useState } from 'react'
import movieDB from '../API/movieDB';
import { Movie, ReqResMovieDB } from '../interfaces/MovieDb';

export const useMovies = () => {
    const [loading, setloading] = useState(true)
    const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([])
    const [peliculasPopulares, setpeliculasPopulares] = useState<Movie[]>([])
    const getMovies=async()=>{
      const resp = await  movieDB.get<ReqResMovieDB>('/now_playing');
      const populares= await movieDB.get<ReqResMovieDB>('/popular')
        setpeliculasEnCine(resp.data.results)
        setpeliculasPopulares(populares.data.results)
        setloading(false);
    }
    useEffect(() => {
      //llama las peliculas actuales
      getMovies();
    
    }, [])
    return {peliculasEnCine,loading,peliculasPopulares }
}
