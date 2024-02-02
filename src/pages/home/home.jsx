import "./home.css"
import Form from "../../components/form/form.jsx"
import Header from "../../layout/header/header.jsx"
import Footer from "../../layout/footer/footer.jsx"
import Banner from "../../layout/banner/banner.jsx"

export default function Home() {
    return <>
        <Header />
        <Banner title1="create" title2=" employee" />
        <div className="container">
            <Form />
        </div >
        <Footer />
    </>
}