import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'

const BaseProgessBar = styled.div<{ progress: number }>(({ progress }) => ({
  height: 10,
  backgroundColor: colors.blue,
  transform: `scaleX(${progress})`,
  transition: `tramsfrom 0.3s`,
  transformOrigin: 'left',
}))

const Container = styled.div(() => ({
  width: '100%',
  height: 10,
  backgroundColor: colors.grey,
  overflow: 'hidden',
  borderRadius: 6,
}))

function ProgressBar({ progress }: { progress: number }) {
  return (
    <Container>
      <ProgressBar progress={progress} />
    </Container>
  )
}

export default ProgressBar
