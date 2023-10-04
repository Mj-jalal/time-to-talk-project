import { SectionHeader } from '../../Components'
import './OurStory.css'
import mediumShotYoungPeople from '../../Assets/images/medium-shot-young-people-recording-podcast.jpg'



function OurSory() {
  return (
    <div className='row m-0'>
        <div className='our-story-container col-lg-8 m-auto'>
          <SectionHeader>
            Our story
          </SectionHeader>
          <div className='mt-5'>
            <p>Pod Talk HTML CSS Template is made by Bootstrap v5.2.2 framework. You are allowed to modify and use this template for your business websites.</p>
            <p>You are not allowed to redistribute the downloadable template ZIP file on any other website without a permission. Please contact TemplateMo website for further information. Thank you.</p>
          </div>
          <div className='contianer-img mt-5'>
            <img src={mediumShotYoungPeople} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default OurSory