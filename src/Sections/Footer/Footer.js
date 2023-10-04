import { FooterButton } from '../../Components'
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import './Footer.css'
import appStore from '../../Assets/images/app-store.png'
import playStore from '../../Assets/images/play-store.png'
import logo from '../../Assets/images/pod-talk-logo.png'
const Footer =()=>{
    return(
        <footer className='footer-container'>
            <div className='container'>
            <div className='footer-content-top'>
                <div className='footer-content-input'>
                    <h4>Subscribe. Every weekly.</h4>
                    <div className='row'>
                        <input type='text' placeholder='Email Adress'/>
                        <FooterButton>
                            Subscribe
                        </FooterButton>
                    </div>
                </div>
                <div className='footer-contact'>
                    <h4>Contact</h4>
                    <ul className='mt-3'>
                        <li className='my-3'><strong>Phone:</strong> 010-020-0340</li>
                        <li><strong>Email:</strong> inquiry@pod.com</li>
                    </ul>
                </div>
                <div className='footer-social'>
                    <h4><strong>Download Mobile</strong></h4>
                    <div className='mt-3'>
                        <img className='me-3' src={appStore} alt=''/>
                        <img src={playStore}/>
                    </div>
                    <h4 className='mt-4'><strong>Social</strong></h4>
                    <ul className='mt-3'>
                        <li><FaInstagram/></li>
                        <li><FaTwitter/></li>
                        <li><FaWhatsapp/></li>
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center flex-wrap m-1 footer-content-bottom'>
                <img src={logo} height={100}/>
                <ul className='d-flex justify-content-between align-items-center flex-wrap'>
                    <li className='me-4'><a href='#'>Homepage</a></li>
                    <li className='me-4'><a href='#'>Browse episodes</a></li>
                    <li className='me-4'><a href='#'>Help Center</a></li>
                    <li className='me-4'><a href='#'>Contact Us</a></li>
                </ul>
                <div>
                    <p>Copyright © 2036 Talk Pod Company</p>
                    <p>Design: TemplateMo</p>
                </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer