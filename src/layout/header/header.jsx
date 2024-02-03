import "./header.css"
import Nav from "../nav/nav"
import { Link } from "react-router-dom"


export default function Header() {
    return <header>
        <Link to="/"> <div className="logo">HR<span>net</span></div></Link>

        <Nav />
    </header >
}