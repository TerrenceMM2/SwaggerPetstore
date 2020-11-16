import React from 'react'

const style = {
    header: {
        display: "block",
        margin: "1rem auto",
        width: "50%",
        textAlign: "center"
    }
}

export default function Header() {
    return (
        <div style={style.header}>
            <h1>Swagger Pet Store</h1>
        </div>
    )
}
