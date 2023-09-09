import React, { useState } from 'react'
import movieDB from '../API/movieDB'
import { DetallesMovie } from '../interfaces/DetallesDb'

export const useMovieDetails =async (id:number) => {
    const [detallesPelicula, setdetallesPelicula] = useState<DetallesMovie>()
    const [loading, setloading] = useState(true)
    const res = await movieDB.get<DetallesMovie>(`/${id}`)
    setdetallesPelicula(res.data)

    setloading(false)
  return {detallesPelicula,loading}
}