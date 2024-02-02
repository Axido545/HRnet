import "./nav.css"
import { Link } from "react-router-dom"

export default function Nav() {
    return <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/employee-list">View Current Employees</Link></li>

        </ul>
    </nav>
}