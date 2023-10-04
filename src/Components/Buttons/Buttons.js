import './Buttons.css'
import { Link } from 'react-router-dom'


const PrimaryButton =(props)=>{
    return(
        <div className='button primary-button'>
            <Link>{props.children}</Link>
        </div>
    )
}
const SecondaryButton =(props)=>{
    return(
        <div className='button secondary-button'>
            <Link>{props.children}</Link>
        </div>
    )
}
const FooterButton =(props)=>{
    return(
        <div className='button footer-button'>
        <Link>{props.children}</Link>
    </div>
    )
}
export default PrimaryButton
export {SecondaryButton, FooterButton}