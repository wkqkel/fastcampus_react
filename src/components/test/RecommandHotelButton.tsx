import { collection, getDocs, writeBatch } from 'firebase/firestore'
import Button from '../shared/Button'
import { COLLECTIONS } from '@/constants'
import { store } from '@/remote/firebase'

/**
 1. 전체 호텔가져와서
 2. 전체 호텔 루프
 3. 호텔 + 추천호텔 아이디 5개를 추가
 A = 가나다  B = {추천호텔: {A,name:가나다}}
 A = 가나다2
 그래서 호텔에 대한 정보가 아니라  id를 넣어서 동기화를 따로 할 필요없게끔함.
 */

function RecommandHotelButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)
    const snapshot = await getDocs(collection(store, COLLECTIONS.HOTEL))

    snapshot.docs.forEach((hotel) => {
      const 추천호텔리스트 = []

      for (let doc of snapshot.docs) {
        if (추천호텔리스트.length === 5) {
          break
        }
        if (doc.id !== hotel.id) {
          추천호텔리스트.push(doc.id)
        }
      }

      batch.update(hotel.ref, {
        recommandHotels: 추천호텔리스트,
      })
    })
    await batch.commit()

    alert('업데이트가 완료되었습니다.')
  }
  return <Button onClick={handleButtonClick}>추천호텔 데이터 추가하기</Button>
}

export default RecommandHotelButton
