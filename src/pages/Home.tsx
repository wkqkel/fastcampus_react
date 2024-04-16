import Top from '@/components/shared/Top'
import AdBanners from '@/components/home/AdBanners'
import CardList from '@/components/home/CardList'
import Button from '@/components/shared/Button'
import { Suspense } from 'react'
import ListRow from '@/components/shared/ListRow'

function HomePage() {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
      <Button>테스트</Button>
      <AdBanners />
      <Button>테스트</Button>
      <Suspense
        fallback={[...new Array(10)].map((_, idx) => (
          <ListRow.Skeleton key={idx} />
        ))}
      >
        <CardList />
      </Suspense>
      <Button>테스트</Button>
    </div>
  )
}

export default HomePage
