import useHotels from '@/components/hotelList/hooks/useHotels'

function HotelList() {
  const { data: hotels } = useHotels()

  console.log('hotels', hotels)
  return <div>hotelList</div>
}

export default HotelList
