import { COLLECTIONS } from '@/constants'
import { collection, doc, getDocs } from 'firebase/firestore'
import { store } from './firebase'
import { Room } from '@/models/room'

export async function getRooms(hotelId: string) {
  const snapshot = await getDocs(
    collection(doc(store, COLLECTIONS.HOTEL, hotelId), COLLECTIONS.ROOM),
  )

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Room),
  }))
}
