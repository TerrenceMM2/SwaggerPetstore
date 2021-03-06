import React from 'react'

// React-Bootstrap
import { ButtonGroup, Button } from "react-bootstrap"

const style = {
    group: {
        float: "right",
        marginBottom: "1rem"
    }
}

export default function PetButtonGroup(props) {
    return (
        <div style={style.group}>
            <ButtonGroup>
                <Button variant="secondary" data-status="available" onClick={props.handleSearch}>Available</Button>
                <Button variant="secondary" data-status="pending" onClick={props.handleSearch}>Pending</Button>
                <Button variant="secondary" data-status="sold" onClick={props.handleSearch}>Sold</Button>
            </ButtonGroup>
        </div>
    )
}
