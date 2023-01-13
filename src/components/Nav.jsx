import React from 'react'
import '../App.css'

export default function Nav(props) {
    return (
        <nav>
            <h1>Youtube</h1>
            <input id='search' type="search" placeholder='Search' />
            <button onClick={props.findVideo}>Search</button>
        </nav>
    )
}
