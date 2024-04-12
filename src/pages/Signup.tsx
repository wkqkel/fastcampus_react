import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

import Form from '@components/signup/Form'

import { FormValues } from '@models/signup'
import { auth, store } from '@/remote/firebase'
import { COLLECTIONS } from '@/constants'

function SignupPage() {
  const navigate = useNavigate()
  const handleSubmit = async (formValues: FormValues) => {
    const { email, password, name } = formValues

    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, {
      displayName: name,
    })

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: name,
    }
    // 이번에는 문서를 저장할 때, 문서의 id 지정
    // 저장은 newUser
    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    navigate('/')
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SignupPage
