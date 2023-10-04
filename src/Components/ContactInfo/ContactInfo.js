import './ContactInfo.css'



function ContactInfo() {
  return (
    <div className='contact-info'>
        <h2>We love to help you. Get in touch</h2>
        <ul className='p-0 mt-4'>
            <li className='d-flex'><strong>Phone:</strong> <p className='ms-5'>010-020-0340</p></li>
            <li className='d-flex'><strong>Email:</strong> <p className='ms-5'>inquiry@pod.co</p></li>
            <li className='d-flex'><strong>Location:</strong> <p className='ms-5'>1355 Market Street, Downtown San Francisco, California</p></li>
        </ul>
    </div>
  )
}

export default ContactInfo