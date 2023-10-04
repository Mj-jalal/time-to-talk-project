import './UserInfo.css'
import verified_img from "../../Assets/images/verified.png"


const UserInfo =(props)=>{
    return(
        <>
            <div className='user-info d-flex aling-items-center'>
                    <img className='user-info-avatar' src={props.avatar} alt=''/>
                    <div className='name-work-user'>
                        <p>{props.name} <span><img className='user-info-verified' src={verified_img} alt=''/></span></p>
                        <h6>{props.work}</h6>
                    </div>
                </div>
                <p>{props.text}</p>
        </>
    )
}
export default UserInfo