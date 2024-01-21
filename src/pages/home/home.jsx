import { NavLink } from "react-router-dom"
import "./home.css"

export default function Home() {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("submit")
    }

    return <> <h1 className="title">HRnet</h1>
        <div className="container">
            <NavLink>View Current Employees</NavLink>
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <fieldset>
                    <legend>Adress</legend>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                </fieldset>
                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <input className="saveBtn" type="submit" value="Save" />
                <div id="confirmation" className="modal">Employee Created!</div>
            </form >
        </div >
    </>
}