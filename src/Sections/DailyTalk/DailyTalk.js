import { SectionHeader } from "../../Components"
import "./DailyTalk.css"
import dailyImage from '../../Assets/images/podcast/11683425_4790593.jpg'
import dailyAvatar from '../../Assets/images/profile/cute-smiling-woman-outdoor-portrait.jpg'
import dailyCheck from '../../Assets/images/verified.png'
import { FaPlay, FaRegClock, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa6";


function DailyTalk() {
  return (
    <div className="row daily-talk-section">
        <div className="col-lg-10 m-auto">
        <SectionHeader>
            Daily talk
        </SectionHeader>
        <div className="row">
            <div className="col-lg-3">
                <img className="daily-image" src={dailyImage} alt=""/>
            </div>
           <div className="col-lg-9">
           <div className="daily-talk-container">
                <div className="daily-talk-header-content col-lg-12">
                    <div className="col-12 d-flex justify-content-between">
                        <div>
                            <span className="me-3 icons-color"><FaPlay/> Play now</span>
                            <span className="me-3"><FaRegClock className="icons-color"/> 50 Minutes</span>
                        </div>
                        <div>
                            <p>Episode <span className="dialy-episode">15</span></p>
                        </div>
                    </div>
                    <h1>Modern Vintage</h1>
                </div>
                <div className="daily-talk-body-content col-12">
                    <p>What is Content Marketing? If you are wondering what content marketing is all about, this is the place to start.</p>
                    <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>
                    <p>Pod Talk HTML CSS Template is made by Bootstrap v5.2.2 framework. You are allowed to modify and use this template for your business websites.</p>
                </div>
                <div className="daily-talk-footer-content col-12 d-flex justify-content-between align-items-center flex-wrap">
                        <div className="d-flex align-items-center">
                            <img className="daily-avatar" src={dailyAvatar} alt=""/>
                            <div className="ms-3">
                                <p className="m-0">Elsa <span><img src={dailyCheck} height={20} alt=""/></span></p>
                                <h6>Influencer</h6>
                            </div>
                        </div>
                        <div>
                            <ul className="d-flex m-0 p-2">
                                <li className="daily-social me-3"><FaInstagram/></li>
                                <li className="daily-social me-3"><FaTwitter/></li>
                                <li className="daily-social me-3"><FaWhatsapp/></li>
                            </ul>
                        </div>
                </div>
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default DailyTalk