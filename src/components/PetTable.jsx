import React from 'react'
import { Table } from "react-bootstrap"
// import TablePagination from './TablePagination';

import { CartCheckFill } from 'react-bootstrap-icons';

import { updatePet } from "../utils/API"

const style = {
    trashCan: {
        color: "#28a745"
    }
}

export default function PetTable(props) {
    let table
    let { data, petStatus } = props

    const handleSold = async (event) => {
        const { id } = event.target.dataset
        const petDataArr = document.getElementById(id).children;
        const soldPet = {};

        for (var i = 0; i < (petDataArr.length - 2); i++) {
            const value = petDataArr[i].textContent
            soldPet[petDataArr[i].dataset.name] = value
        }

        soldPet.status = "sold";

        const response = await updatePet(soldPet)
    }

    switch (petStatus) {
        case "available":
            table = 
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Photo Thumbnail</th>
                                <th>Status</th>
                                <th>Mark as "Sold"</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr id={index} key={index}>
                                        <td data-name={"id"}>{item.id}</td>
                                        <td data-name={"name"}>{item.name}</td>
                                        <td data-name={"photoUrl"}>{item.photoUrls[0]}</td>
                                        <td data-name={"status"}>{item.status}</td>
                                        <td onClick={handleSold} data-id={index}><CartCheckFill size={20} style={style.trashCan}/></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    {/* In-progress: paginating the data. */}
                    {/* {(pages > 1) ? <TablePagination handleOffset={handleOffset} pages={pages} offset={offset}/> : <></>} */}
                </div>
            break;
        case "pending":
            table = 
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Photo Thumbnail</th>
                            <th>Status</th>
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
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    {/* In-progress: paginating the data. */}
                    {/* {(pages > 1) ? <TablePagination handleOffset={handleOffset} pages={pages} offset={offset}/> : <></>} */}
                </div>
            break;
        case "sold":
            table = 
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Photo Thumbnail</th>
                            <th>Status</th>
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
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    {/* In-progress: paginating the data. */}
                    {/* {(pages > 1) ? <TablePagination handleOffset={handleOffset} pages={pages} offset={offset}/> : <></>} */}
                </div>
            break;
        default:
            table = <></>
    }

    return table
}
