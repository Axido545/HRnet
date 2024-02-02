import "./employee-list.css"
import TableData from "../../../components/tableData/tableData.jsx"
import Footer from "../../../layout/footer/footer.jsx"
import Header from "../../../layout/header/header.jsx"
import Banner from "../../../layout/banner/banner.jsx"

export default function EmployeeList() {
    return <>     <Header />
        <Banner title1="Current" title2="Employees" />
        <div id="employee-div" className="container">
            <TableData />
        </div>
        <Footer />
    </>

}