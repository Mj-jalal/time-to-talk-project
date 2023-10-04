import './Header.css'
import { Link } from "react-router-dom"
import logo_img from '../../Assets/images/pod-talk-logo.png'
import { NaveItem, NaveItemdropdown } from '../../Components/index'
import { PrimaryButton } from '../../Components'
import { FaSistrix } from "react-icons/fa6";

const Header=()=>{
    return(
        <div className='nav-bar-container'>
           <nav className="navbar navbar-expand-lg bg-transparent p-3">
            <div className="container-fluid">
            <a className="navbar-brand" href="/" ><img src={logo_img} height={100}/></a>
            <form className="col-lg-4 d-flex">
                <input className="nav-bar-input col-lg-10" type="search" placeholder="Search" aria-label="Search"/>
                <div className='searsh-icon col-lg-1.8'>
                    <FaSistrix/>
                </div>
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                    <NaveItem>
                    <Link className="nav-link mx-2 active" aria-current="page" to="/">Home</Link>
                    </NaveItem>
                    <NaveItem>
                    <Link className="nav-link mx-2" to="/about">About</Link>
                    </NaveItem>
                    <NaveItemdropdown>
                    <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Page
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/ListingPage">Listing Page</Link></li>
                    <li><Link className="dropdown-item" to="/DetailPage">Details Page</Link></li>
                    </ul>
                    </NaveItemdropdown>
                    <NaveItem>
                    <Link className="nav-link mx-2"to="/Contact">Contact</Link>
                    </NaveItem>
                </ul>
                <PrimaryButton>
                    Get Started
                </PrimaryButton>
            </div>
            </div>
    </nav>

        </div>
    )
}

export default Header