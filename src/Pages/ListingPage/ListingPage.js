import { HeaderPage, PaginaTion} from '../../Components'
import { LasteEpisode, TrendingEpisodes } from '../../Sections'
import './ListingPage.css'



function ListingPage() {
  return (
    <>
    <HeaderPage>
         Listing Page
    </HeaderPage>
   {/* <div className='mt-5 text-center'> */}
   <LasteEpisode/>
    <PaginaTion/>
   {/* </div> */}
    <TrendingEpisodes/>
    </>
  )
}

export default ListingPage