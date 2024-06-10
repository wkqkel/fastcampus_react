import { useState } from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { useSetRecoilState } from "recoil"

import { auth } from "@/remote/firebase"
import { userAtom } from '@store/atom/user'

function AuthGuard({ children }: { children: React.ReactNode }) {
    const [initailize, setInitialize] = useState(false)
    const setUser = useSetRecoilState(userAtom)


    onAuthStateChanged(auth, (user) => {
        if (user == null) {
            // TODO
            setUser(null)
        } else {

            setUser({
                uid: user.uid,
                email: user.email ?? '',  // as string 으로 타입단언
                displayName: user.displayName ?? '',
                photoURL: user.photoURL ?? ''
            })

            setInitialize(true)
        }
    })
    if (initailize === false) {
        return null
    }



    return <>{children}</>

}

export default AuthGuard