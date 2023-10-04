import './HeaderPage.css'


function HeaderPage(props) {
  return (
    <div className='Header-page'>
        <h1>{props.children}</h1>
    </div>
  )
}

export default HeaderPage