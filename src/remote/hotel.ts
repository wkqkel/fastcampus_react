import { COLLECTIONS } from '@/constants'
import {
  QuerySnapshot,
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  limit,
  query,
  startAfter,
  where,
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

export async function getHotel(id: string) {
  const snapshot = await getDoc(doc(store, COLLECTIONS.HOTEL, id))

  return {
    id,
    ...snapshot.data(),
  } as Hotel
}

export async function getRecommandHotels(hotelIds: string[]) {
  const recommandQuery = query(
    collection(store, COLLECTIONS.HOTEL),
    where(documentId(), 'in', hotelIds),
  )

  const snapshot = await getDocs(recommandQuery)

  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Hotel,
  )
}
