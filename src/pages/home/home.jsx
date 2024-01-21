import { NavLink } from "react-router-dom"
import "./home.css"
import Form from "../../components/form/form.jsx"

export default function Home() {
    return <> <h1 className="title">HRnet</h1>
        <div className="container">
            <NavLink to="/employee-list">View Current Employees</NavLink>
            <h2>Create Employee</h2>
            <Form />
        </div >
    </>
}