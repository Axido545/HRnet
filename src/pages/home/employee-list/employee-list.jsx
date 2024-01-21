import "./employee-list.css"
import { NavLink } from "react-router-dom"

export default function EmployeeList() {
    return <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <NavLink to="/">Home</NavLink>
    </div>
}