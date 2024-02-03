import "./nav.css"
import { Link } from "react-router-dom"

export default function Nav() {
    return <nav>
        <ul className="menu1">
            <li className="menu2"><Link to="/">Home</Link></li>
            <li className="menu2"> <Link to="/employee-list">View Current Employees</Link></li>

        </ul>
    </nav>
}