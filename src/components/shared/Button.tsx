import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
  buttonWeakmap,
} from '@/styles/button'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

const Button = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakmap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          border-radius: 0;
          width: 100%;
        `
      : undefined,

  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined,
)

export default Button
