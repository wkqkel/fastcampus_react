import { useCallback } from 'react'

import { FormValues } from '@models/signin'
import Form from '@components/signin/Form'

function SigninPage() {
  const handlleSubmit = useCallback((formValues: FormValues) => {}, [])
  return (
    <div>
      <Form onSubmit={handlleSubmit} />
    </div>
  )
}

export default SigninPage
