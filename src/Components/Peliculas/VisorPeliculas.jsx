import React, { useState, useEffect } from 'react'

export default function VisorPeliculas() {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch ('https://api-movies-users.vercel.app/movies')
        .then(r => r.json() )
        .then(movies =>{
            setPeliculas(movies)
        })
    }, [])
    
    return (
        <section>
            <table border = "1">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Año</th>
                    <th>Cover</th>
                    <th>Descripción</th>
                    <th>Duración</th>
                    <th>Calificación</th>
                    <th>Fuente</th>
                    <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map((peliculas,i) => {
                        return <tr key={i}>
                            <td>{peliculas.id} </td>
                            <td>{peliculas.title} </td>
                            <td>{peliculas.year} </td>
                            <td><img src={peliculas.cover}/></td>
                            <td>{peliculas.description} </td>
                            <td>{peliculas.duration} </td>
                            <td>{peliculas.contentRating} </td>
                            <td><a href={peliculas.source} target="_blank">Enlace</a></td>
                            <td><ul>{peliculas.tags.map(tag => <li>{tag}</li>)}</ul></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
}
