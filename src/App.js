import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import PetTable from "./components/PetTable"
import PetButtonGroup from "./components/PetButtonGroup"
import Footer from "./components/Footer"

import { Container } from "react-bootstrap"

import { getPets } from "./utils/API"
import { limitResults } from "./utils/dataHandling"

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

    const handleSearch = async (event) => {
        const { status } = event.target.dataset
        try {
            const response = await getPets(status)
            setPetData(response)
            const limitedData = await limitResults(petData, offset);
            setLimitedPetData(limitedData)
        } catch (error) {
            console.log(error)
        } finally {
        }
    }

    return (
        <div style={style.app}>
            <Container style={style.container}>
                <Header />
                <PetButtonGroup handleSearch={handleSearch}/>
                <PetTable petData={limitedPetData}/>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
