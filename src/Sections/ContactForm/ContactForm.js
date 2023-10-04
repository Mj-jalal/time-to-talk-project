import { SecondaryButton, SectionHeader } from '../../Components'
import './ContactForm.css'



function ContactForm() {
  return (
    <div className='row contact-form'>
          <div className='col-lg-8 m-auto'>
            <SectionHeader>
                You know, Contact Form
            </SectionHeader>
            <div className='row'>
                
                    <div className='floating-label-group col-lg-6'>
                       <input className='col-12' type='text'/>
                       <label className='floating-label'>Full Name</label>
                    </div>
                    <div className='floating-label-group col-lg-6'>
                       <input className='col-12' type='text'/>
                       <label className='floating-label'>Email Address</label>
                    </div>
                
                <div className='floating-label-group col-lg-12'>
                   <input className='col-12' type='text'/>
                   <label className='floating-label'>Company</label>
                </div>
                <div className='floating-label-group col-lg-12'>
                    <textarea className='col-12'  rows="5"></textarea>
                    <label className='floating-label'>Describe message here</label>
                </div>
                <div className='col-lg-12 contact-form-button'>
                  <SecondaryButton>
                      Submit
                  </SecondaryButton>
                </div>
            </div>
          </div>
    </div>
  )
}

export default ContactForm