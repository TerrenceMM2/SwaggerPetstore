import React from 'react'

// React-Bootstrap
import { Toast } from "react-bootstrap"

const style = {
    toast: {
        float: "right"
    }
}

export default function AlertToast(props) {

    const { setShow, show, alertData } = props
    const { status, data } = alertData

    let alertTitle;
    let alertText

    if (status != 200) {
        alertTitle = "Error"
        alertText = "There was an issue"
    } else {
        alertTitle = "Success"
        alertText = `${data.name}, has been sold.`
    }

    return (
        <div style={style.toast}>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
                />
                <strong className="mr-auto">{alertTitle}</strong>
            </Toast.Header>
            <Toast.Body>{alertText}</Toast.Body>
            </Toast>
        </div>
    )
}
