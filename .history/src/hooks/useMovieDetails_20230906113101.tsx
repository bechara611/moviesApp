import React, { useEffect, useState } from 'react'
import movieDB from '../API/movieDB'
import { DetallesMovie } from '../interfaces/DetallesDb'
import { DetallesMovieCredits } from '../interfaces/CreditsDb'

export const useMovieDetails = (id: number) => {
    const [detallesPelicula, setdetallesPelicula] = useState<DetallesMovie>()
    const [detallesCredits, setdetallesCredits] = useState<DetallesMovieCredits>()
    const [loading, setloading] = useState(true)

    const getDetalles = async () => {
        const res = await movieDB.get<DetallesMovie>(`/${id}`)
        const resCast= await movieDB.get<DetallesMovieCredits>(`/${id}/credits`)
        setdetallesPelicula(res.data)
        setdetallesCredits(resCast.data)
        setloading(false)
    }

useEffect(() => {
  getDetalles()

}, [])

    return { detallesPelicula,detallesCredits, loading }
}

,