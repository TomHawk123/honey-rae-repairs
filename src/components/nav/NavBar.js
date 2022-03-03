import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


// Link component imported from react-router-dom has one job, it generates anchor tags
// the "to=" attribute is going to be the "href=" attribute of the anchor tag the Link component is
// going to create.
export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/"></Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
        </ul>
    )
}