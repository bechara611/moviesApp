import React, { useEffect, useState } from 'react'
import movieDB from '../API/movieDB';
import { Movie, ReqResMovieDB } from '../interfaces/MovieDb';
interface stateMovies {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upcoming: Movie[]
}

export const useMovies = () => {
    const [loading, setloading] = useState(true)
    const [estadoPeliculas, setEstadoPeliculas] = useState<stateMovies>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });

    const getMovies = async () => {
        const nowPlayingPromise = await movieDB.get<ReqResMovieDB>('/now_playing');
        const popularPromise = await movieDB.get<ReqResMovieDB>('/popular')
        const topRatedPromise = await movieDB.get<ReqResMovieDB>('/top_rated')
        const upcomingPromise = await movieDB.get<ReqResMovieDB>('/upcoming')

        const respuestasCompletas = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise])
        setEstadoPeliculas({
            nowPlaying: respuestasCompletas[0].data.results,
            popular: respuestasCompletas[1].data.results,
            topRated: respuestasCompletas[2].data.results,
            upcoming: respuestasCompletas[3].data.results,
        })

        setloading(false);
    }
    useEffect(() => {
        //llama las peliculas actuales
        getMovies();

    }, [])
    return { ...estadoPeliculas, loading }
}
