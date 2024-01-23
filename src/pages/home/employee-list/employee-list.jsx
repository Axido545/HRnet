import "./employee-list.css"
import { NavLink } from "react-router-dom"
import TableData from "../../../components/tableData/tableData.jsx"

export default function EmployeeList() {
    return <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <TableData />
        <NavLink to="/">Home</NavLink>
    </div>
}