import { getRecommandHotels } from '@/remote/hotel'
import { useQuery } from 'react-query'

function useRecommandHotels({ hotelIds }: { hotelIds: string[] }) {
  return useQuery(
    ['recommandHotels', JSON.stringify(hotelIds)],
    () => getRecommandHotels(hotelIds),
    {
      enabled: hotelIds.length > 0,
    },
  )
}

export default useRecommandHotels
