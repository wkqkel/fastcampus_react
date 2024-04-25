import Carousel from '@/components/hotel/Carousel'
import Contents from '@/components/hotel/Contents'
import Map from '@/components/hotel/Map'
import RecommandHotels from '@/components/hotel/RecommandHotels'
import Rooms from '@/components/hotel/Rooms'
import useHotel from '@/components/hotel/hooks/useHotel'
import Top from '@/components/shared/Top'
import { useParams } from 'react-router-dom'

function HotelPage() {
  const { id } = useParams() as { id: string }

  const { isLoading, data } = useHotel({ id })

  if (data == null || isLoading) {
    return <div>Loading</div>
  }

  const { name, comment, images, contents, location, recommandHotels } = data
  return (
    <div>
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <Rooms hotelId={id} />
      <Contents contents={contents} />
      <Map location={location} />
      <RecommandHotels recommandHotels={recommandHotels} />
    </div>
  )
}

export default HotelPage
