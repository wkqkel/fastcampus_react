import './App.css'
import Text from '@shared/Text'
import Button from './components/shared/Button'
import Input from './components/shared/Input'
import TextField from './components/shared/TextField'
import Alert from './components/shared/Alert'

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
      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>
      <Input placeholder="로그인" aria-invalid={false} />
      <Input aria-invalid={true} />
      <TextField label="아이디" />
      <TextField label="패스워드" hasError />

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>
      <Alert
        title="알럿이 떴습니다"
        description="안녕하세요"
        onButtonClick={() => {}}
        open={true}
      />
    </div>
  )
}

export default App
