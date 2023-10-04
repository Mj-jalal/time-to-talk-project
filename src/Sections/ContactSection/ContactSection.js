import { ContactInfo, ContactMap } from '../../Components'
import './ContactSection.css'


function ContactSection() {
  return (
    <div className='row contact-Section'>
        <div className='col-lg-6'><ContactInfo/></div>
        <div className='col-lg-6'><ContactMap/></div>
    </div>
  )
}

export default ContactSection