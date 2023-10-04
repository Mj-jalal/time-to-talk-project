import './NaveItem.css'

const NaveItem =(props)=>{
    return(
        <li className='nav-item'> 
            {props.children}
        </li>
    )
}
const NaveItemdropdown =(props)=>{
    return(
        <li className='nav-item dropdown'> 
            {props.children}
        </li>
    )
}

export default NaveItem
export {NaveItemdropdown}