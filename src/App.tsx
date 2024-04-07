import './App.css'
import Text from '@shared/Text'
import Button from './components/shared/Button'

function App() {
  return (
    <div>
      <Text typography="t1" display="block">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text>t5</Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>
      <Button>클릭해주세요</Button>
      <Button weak>클릭해주세요</Button>
      <Button color="success">클릭해주세요</Button>
      <Button color="success" weak>
        클릭해주세요
      </Button>
      <Button color="error">클릭해주세요</Button>
      <Button color="error" weak>
        클릭해주세요
      </Button>
      <Button color="primary" full size="large">
        클릭해주세요
      </Button>
      <Button color="primary" full disabled>
        클릭해주세요
      </Button>
    </div>
  )
}

export default App
