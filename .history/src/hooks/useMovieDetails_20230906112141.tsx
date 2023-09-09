import React, { useEffect, useState } from 'react'
import movieDB from '../API/movieDB'
import { DetallesMovie } from '../interfaces/DetallesDb'

export const useMovieDetails = (id: number) => {
    const [detallesPelicula, setdetallesPelicula] = useState<DetallesMovie>()
    const [loading, setloading] = useState(true)

    const getDetalles = async () => {
        const res = await movieDB.get<DetallesMovie>(`/${id}`)

        setdetallesPelicula(res.data)

        setloading(false)
    }

useEffect(() => {
  getDetalles()

}, [])

    return { detallesPelicula, loading }
}

