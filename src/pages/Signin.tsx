
import useGoogleSignin from '@hooks/useGoogleSignin'

import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import Button from '@shared/Button'


function SigninPage() {
  const { signin } = useGoogleSignin()

  return (
    <Flex direction="column" align="center" style={{ padding: 24 }}>
      <Spacing size={100} />
      <img
        src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/send-128.png"
        alt=""
        width={120}
        height={120}
      />
      <Spacing size={60} />
      <Button size="medium" onClick={signin}>
        <Flex align="center" justify="center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-128.png"
            alt=""
            width={20}
            height={20}
          />
          <Spacing size={4} direction="horizontal" />
          Google 로그인
        </Flex>
      </Button>
    </Flex>
  )
}

export default SigninPage
