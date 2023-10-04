import './PaginaTion.css'
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function PaginaTion() {
  return (
    <div className='row my-5 pagination-container'>
      <div className='col-lg-3 m-auto pagina-tio'>
        <div className='mx-2 pagination-number'>
          <FaAnglesLeft/>
        </div>
        <ul className='p-0 d-flex justify-content-center '>
            <li className='mx-2 pagination-number activ'>1</li>
            <li className='mx-2 pagination-number'>2</li>
            <li className='mx-2 pagination-number'>3</li>
        </ul>
        <div className='mx-2 pagination-number'>
           <FaAnglesRight/>
        </div>
    </div>
    </div>
  )
}

export default PaginaTion