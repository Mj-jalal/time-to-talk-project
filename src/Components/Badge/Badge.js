import './Badge.css'

const Badge=({work})=>{
    return(
        <div className='badge-container'>
            {work.map(el=> <p key={el}>{el}</p>)}
        </div>
    )
}

const SecondaryBadge =(props)=>{
    return(
        <p className='secondary-badge'>{props.children}</p>
    )
}
export default Badge
export {SecondaryBadge}