import useShare from '@/hooks/useShare'
import Flex from '../shared/Flex'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'
import { Hotel } from '@/models/hotel'
import { css } from '@emotion/react'
import CopyToClipboard from 'react-copy-to-clipboard'

function ActionButtons({ hotel }: { hotel: Hotel }) {
  const share = useShare()

  const { name, comment, mainImageUrl } = hotel
  return (
    <Flex css={containerStyles}>
      <Button
        label="찜하기"
        onClick={() => {}}
        iconUrl="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-64.png"
      />
      <Button
        label="공유하기"
        onClick={() => {
          share({
            title: name,
            description: comment,
            imageUrl: mainImageUrl,
            buttonLabel: 'mtrip에서 보기',
          })
        }}
        iconUrl="https://cdn1.iconfinder.com/data/icons/rounded-social-media/512/kakao-64.png"
      />
      <CopyToClipboard
        text={window.location.href}
        onCopy={() => {
          alert('링크가 복사되었습니다.')
        }}
      >
        <Button
          label="링크복사"
          iconUrl="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/clone-64.png"
        />
      </CopyToClipboard>
    </Flex>
  )
}

function Button({
  label,
  iconUrl,
  onClick,
}: {
  label: string
  iconUrl: string
  onClick?: () => void
}) {
  return (
    <Flex direction="column" align="center" onClick={onClick}>
      <img src={iconUrl} alt="" width={30} height={30} />
      <Spacing size={6} />
      <Text typography="t7">{label}</Text>
    </Flex>
  )
}

const containerStyles = css`
  padding: 24px;
  cursor: pointer;

  & * {
    flex: 1;
  }
`
export default ActionButtons
