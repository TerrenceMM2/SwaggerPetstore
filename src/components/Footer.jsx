import React from 'react'

const style = {
    footer: {
        textAlign: "center"
    },
    link: {
        textDecoration: "none"
    }
}

export default function Footer() {
    return (
        <div style={style.footer}>
            <p>Made by <a style={style.link} href="https://terrence.codes" target="_blank" rel="noreferrer">Terrence Mahnken</a> using <a style={style.link} href="https://petstore.swagger.io/" target="_blank" rel="noreferrer">Swagger Petstore API</a>.</p>
        </div>
    )
}
