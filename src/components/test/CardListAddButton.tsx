import Button from '@shared/Button'

import { collection, doc, writeBatch } from 'firebase/firestore'

import { store } from '@remote/firebase'
import { card_list } from '@/mock/data'
import { COLLECTIONS } from '@/constants'

function CardListAddButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store) // 성능을 위해 data를 한번에 저장

    card_list.forEach((card) => {
      const docRef = doc(collection(store, COLLECTIONS.CARD)) // card라는 collection에 접근

      batch.set(docRef, card)
    })

    await batch.commit()

    alert('카드 리스트 추가완료')
  }

  return <Button onClick={handleButtonClick}>카드 리스트 추가하기</Button>
}

export default CardListAddButton
