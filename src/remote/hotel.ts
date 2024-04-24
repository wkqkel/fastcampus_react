import { COLLECTIONS } from '@/constants'
import {
  QuerySnapshot,
  collection,
  getDocs,
  limit,
  query,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'
import { Hotel } from '@/models/hotel'

export async function getHotels(pageParams?: QuerySnapshot<Hotel>) {
  const hotelQuery =
    pageParams == null
      ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
      : query(
          collection(store, COLLECTIONS.HOTEL),
          startAfter(pageParams),
          limit(10),
        )

  const hotelSnapshot = await getDocs(hotelQuery)

  const items = hotelSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Hotel, // items도 hotel[]로 됨.
  )

  const lastVisible = hotelSnapshot.docs[hotelSnapshot.docs.length - 1]

  return {
    items,
    lastVisible,
  }
}