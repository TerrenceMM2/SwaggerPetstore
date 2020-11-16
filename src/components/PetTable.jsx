import React from 'react'
import { Table } from "react-bootstrap"

export default function PetTable(props) {
    let table;
    let { petData } = props

    petData.length > 0 ? 
    table = 
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Photo Thumbnail</th>
                    <th>Status</th>
                    <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {petData.map(pet => {
                        return (
                            <tr>
                                <td>{pet.id}</td>
                                <td>{pet.name}</td>
                                <td>{pet.photoUrls}</td>
                                <td>{pet.tags}</td>
                                <td>{pet.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    : table = <></>

    return table
}
