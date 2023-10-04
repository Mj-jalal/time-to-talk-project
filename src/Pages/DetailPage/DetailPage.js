import { HeaderPage } from '../../Components'
import { DailyTalk, RelatedEpisodes } from '../../Sections'
import './DetailPage.css'



function DetailPage() {
  return (
    <>
        <HeaderPage>
              Detail Page
        </HeaderPage>
        <DailyTalk/>
        <RelatedEpisodes/>
    </>
  )
}

export default DetailPage