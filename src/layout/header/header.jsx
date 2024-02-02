import "./header.css"
import { Link } from "react-router-dom"


export default function Header() {
    return <header>
        <logo>HRnet</logo>
        <nav>
            <Link to="/employee-list">View Current Employees</Link>
        </nav>
    </header>
}