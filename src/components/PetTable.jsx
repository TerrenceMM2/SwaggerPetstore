import React, { useState } from 'react'

// React-Bootstrap
import { Table } from "react-bootstrap"

// Design
import { CartCheckFill } from 'react-bootstrap-icons';

// Custom Components
// import TablePagination from './TablePagination';
import AlertToast from "./AlertToast"

// APIs
import { updatePet } from "../utils/API"

const style = {
    trashCan: {
        color: "#28a745"
    }
}

export default function PetTable(props) {
    let table
    let { data, petStatus } = props

    const [show, setShow] = useState(false)
    const [alertData, setAlertData] = useState({})

    // Update "sold" pet
    const handleSold = async (event) => {
        const { id } = event.target.dataset
        const petDataArr = document.getElementById(id).children;
        const soldPet = {};

        // Creates new object data for PUT request
        for (var i = 0; i < (petDataArr.length - 2); i++) {
            const value = petDataArr[i].textContent
            soldPet[petDataArr[i].dataset.name] = value
        }

        soldPet.status = "sold";

        // Sets alert data and shows toast
        setAlertData(response)
        setShow(true)
    }

    // Shows custom tables based on status
    switch (petStatus) {
        case "available":
            table = 
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
            break;
        case "pending":
            table = 
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
            break;
        case "sold":
            table = 
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
            break;
        default:
            table = <></>
    }

    return (
        <div>
            {table}
            <AlertToast alertData={alertData} setShow={setShow} show={show} />
        </div>
    )
}
