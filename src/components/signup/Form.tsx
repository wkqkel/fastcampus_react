import { css } from '@emotion/react'
import Flex from '@shared/Flex'
import FixedBottomButton from '../shared/FixedBottomButton'
import Spacing from '../shared/Spacing'
import TextField from '../shared/TextField'

function Form() {
  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField label="이메일" placeholder="wkqkel@naver.com" />
      <Spacing size={16} />
      <TextField label="패스워드" type="password" />
      <Spacing size={16} />
      <TextField label="패스워드 재확인" type="password" />
      <Spacing size={16} />
      <TextField label="이름" placeholder="박상원" />

      <FixedBottomButton label="회원가입" onClick={() => {}} />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`
export default Form
