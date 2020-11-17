import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import PetTable from "./components/PetTable"
import PetButtonGroup from "./components/PetButtonGroup"
import Footer from "./components/Footer"
import NewPetButton from "./components/NewPetButton"
import AlertModal from "./components/AlertModal"

import { Container } from "react-bootstrap"

import { getPets } from "./utils/API"
import { limitResults, pagination } from "./utils/dataHandling"

const style = {
    app: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%"
    },
    container: {
        flex: "1 0 auto"
    }
}

function App() {

    const [petData, setPetData] = useState([])
    const [limitedPetData, setLimitedPetData] = useState([])
    const [offset, setOffset] = useState(0)
    const [pages, setPages] = useState(0)
    const [petStatus, setPetStatus] = useState("")
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSearch = async (event) => {
        setPetData([])
        const { status } = event.target.dataset
        setPetStatus(status)
        try {
            const response = await getPets(status)
            setPetData(response)
            setPages(pagination(response.length))
        } catch (error) {
            console.log(error)
        }
    }

    // In-progress: handles paginating the data.
    // const handleOffset = (event) => {
    //     const { offset } = event.target.dataset
    //     console.log(typeof offset, offset)
    //     let num = parseInt(offset)
    //     console.log(typeof num, num)
    //     setOffset(num)
    // }

    useEffect(async () => {
        const limitedData = await limitResults(petData, offset)
        setLimitedPetData(limitedData)
    }, [petData])

    return (
        <div style={style.app}>
            <Header />
            <Container style={style.container}>
                <NewPetButton />
                <PetButtonGroup handleSearch={handleSearch}/>
                <PetTable petStatus={petStatus} data={limitedPetData}/>
                <AlertModal />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
