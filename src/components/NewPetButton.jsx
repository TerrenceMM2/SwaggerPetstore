import React, { useState } from 'react'
import { Button } from "react-bootstrap"

import ModalForm from "./ModalForm"

const style = {
    button: {
        float: "left"
    }
}

export default function NewPetButton() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div>
            <Button style={style.button} onClick={handleShow}>New Pet</Button>
            <ModalForm show={show} handleClose={handleClose} />
        </div>
    )
}
