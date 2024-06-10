import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'

import { colors } from '@/styles/colorPalette'
import Flex from '@shared/Flex'
import Button from './Button'
import { useCallback } from 'react'
import useUser from '@/hooks/auth/useUser'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', 'signin'].includes(location.pathname) === false

  // @TODO
  const user = useUser()

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="/my">
          <img src={
            user.photoURL ??
            'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-64.png'
          }
            alt="유저의 이미지"
            width={40}
            height={40}
            style={{ borderRadius: '100%' }}
          />
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [showSignButton, user])

  return (
    <Flex align="center" justify="space-between" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`
export default Navbar
