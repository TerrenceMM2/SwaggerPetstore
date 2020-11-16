import React from 'react'
import { Table } from "react-bootstrap"
// import TablePagination from './TablePagination';

import { TrashFill } from 'react-bootstrap-icons';

const style = {
    trashCan: {
        color: "#dc3545"
    }
}

export default function PetTable(props) {
    let table;
    let { data } = props

    data.length > 0 ? 
    table = 
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Photo Thumbnail</th>
                    <th>Status</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.photoUrls[0]}</td>
                                <td>{item.status}</td>
                                <td><TrashFill style={style.trashCan}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {/* In-progress: paginating the data. */}
            {/* {(pages > 1) ? <TablePagination handleOffset={handleOffset} pages={pages} offset={offset}/> : <></>} */}
        </div>
    : table = <></>

    return table
}
