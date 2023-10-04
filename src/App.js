import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./App.css";
import { Footer, Header } from "./Sections";
import { Container } from "./Components/index";
import {About, Home, ListingPage, DetailPage, Contact} from './Pages/index'

const App =()=>{
    return(
        <>
        <Router>
            <Header/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/ListingPage" element={<ListingPage/>}/>
                    <Route path="/DetailPage" element={<DetailPage/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Router>
        
        </>
    )
}

export default App