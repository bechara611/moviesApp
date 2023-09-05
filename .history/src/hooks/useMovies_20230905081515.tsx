import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import movieDB from '../API/movieDB';
import { Movie, ReqResMovieDB } from '../interfaces/MovieDb';

export const useMovies = () => {
    const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([])
    const getMovies=async()=>{
      const resp = await  movieDB.get<ReqResMovieDB>('/now_playing');
        setpeliculasEnCine(resp.data.results)
    }
    useEffect(() => {
      //llama las peliculas actuales
      getMovies();
    
    }, [])
    return {peliculasEnCine }
}
