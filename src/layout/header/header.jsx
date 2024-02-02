import "./header.css"
import Nav from "../nav/nav"
import { Link } from "react-router-dom"


export default function Header() {
    return <header>
        <Link to="/"> <logo>HR<span>net</span></logo></Link>

        <Nav />
    </header >
}