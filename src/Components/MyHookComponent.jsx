import React, { useState } from 'react'

export default function MyHookComponent() {
    const [name, setName] = useState("Andrea")
    const [age, setAge] = useState("30")
    const [study, setStudy] = useState({
        estudy1 : "Colegio",
        estudy2 : "Técnico",
        estudy3 : "Tecnólogo",
    })
    const [equipos, setEquipos] = useState ([
        {nombre:"Nacional", categoria:"A", deporte:"Futbol"},
        {nombre:"America", categoria:"B", deporte:"Futbol"},
        {nombre:"Envigado", categoria:"C", deporte:"Baloncesto"}
    ])
    /* const ItemEquipo = props => */

    let {
        estudy1,
        estudy2,
        estudy3
    } = study
    return (
        <div>
            <h1>
            Mi nombre es : {name} <br/> 
            Mi edad es : {age} <br/>
            <b>Estudios: </b>
            <ol>
                <li>{estudy1} </li>
                <li>{estudy2} </li>
                <li>{estudy3} </li>
            </ol>
            </h1>
            <ol>
                <h2>Equipos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre </th>
                            <th>Categoria</th>
                            <th>Deporte</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipos.map((equipos, index) => <tr key ={index} >
                                <td>{equipos.nombre} </td>
                                <td>{equipos.categoria} </td>
                                <td>{equipos.deporte} </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </ol>
        </div>
    )
}
