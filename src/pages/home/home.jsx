import "./home.css"
import Form from "../../components/form/form.jsx"
import Header from "../../layout/header/header.jsx"

export default function Home() {
    return <>
        <Header />
        <div className="container">

            <h2>Create Employee</h2>
            <Form />
        </div >
    </>
}