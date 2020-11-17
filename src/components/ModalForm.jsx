import React, { useState } from 'react'

// React-Bootstrap
import { Modal, Button, Form } from 'react-bootstrap'

export default function ModalForm(props) {

    const [petId, setPetId] = useState("")
    const [petName, setPetName] = useState("")
    const [petUrl, setPetUrl] = useState("")
    const [petStatus, setPetStatus] = useState("")

    const handleNewPetSubmit = () => {
        
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGroupId">
                            <Form.Label>Pet ID</Form.Label>
                            <Form.Control onChange={event => setPetId(event.target.value)} type="input" placeholder="12345" />
                        </Form.Group>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Pet Name</Form.Label>
                            <Form.Control onChange={event => setPetName(event.target.value)} type="input" placeholder="Fido" />
                        </Form.Group>
                        <Form.Group controlId="formGroupUrl">
                            <Form.Label>Pet Photo (URL)</Form.Label>
                            <Form.Control onChange={event => setPetName(event.target.value)} type="input" placeholder="https://example.com" />
                        </Form.Group>
                        <Form.Group controlId="formGroupStatus">
                            <Form.Label>Pet Status</Form.Label>
                            <fieldset id="petStatus">
                                <Form.Check onChange={event => setPetStatus(event.target.value)} name="petStatus" type="radio" value="available" label="Available" />
                                <Form.Check onChange={event => setPetStatus(event.target.value)} name="petStatus" type="radio" value="pending" label="Pending" />
                                <Form.Check onChange={event => setPetStatus(event.target.value)} name="petStatus" type="radio" value="sold" label="Sold"/>
                            </fieldset>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Add Pet
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
