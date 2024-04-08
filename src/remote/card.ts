import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'

import { COLLECTIONS } from '@constants'
import { Card } from '@/models/card'

export async function getCards() {
  const cardSnapshot = await getDocs(collection(store, COLLECTIONS.CARD)) // 전체 컬렉션 docs 가져오기

  // 원하는 형태로 데이터 가공 id + data
  return cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))
}
