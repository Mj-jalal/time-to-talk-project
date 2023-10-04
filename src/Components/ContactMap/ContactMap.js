import './ContactMap.css'



function ContactMap() {
  return (
    <div className='contact-map'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105512.83375289637!2d-6.682781449643898!3d34.26701210001782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7575f8a6d8643%3A0xc7050653c05e128b!2zS8Opbml0cmE!5e0!3m2!1sfr!2sma!4v1694987243658!5m2!1sfr!2sma" 
        // width="600" 
        height="300" 
        style={{border:"0" }}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title='contact-map'
        >

        </iframe>
    </div>
  )
}

export default ContactMap