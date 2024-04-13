import Apply from '@/components/apply'
import useAppliedCard from '@/components/apply/hooks/useAppliedCard'
import useApplyCardMutation from '@/components/apply/hooks/useApplyCardMutation'
import usePollApplyStatus from '@/components/apply/hooks/usePollApplyStatus'
import useUser from '@/components/hooks/auth/useUser'
import FullPageLoader from '@/components/shared/FullPageLoader'
import { useAlertContext } from '@/contexts/AlertContexts'
import { APPLY_STATUS } from '@/models/apply'
import { updateApplyCard } from '@/remote/apply'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ApplyPage() {
  const navigate = useNavigate()
  const [readyToPoll, setReadyPoll] = useState(false)

  const { open } = useAlertContext()

  const user = useUser()
  const { id } = useParams() as { id: string }

  const { data } = useAppliedCard({
    userId: user?.uid as string,
    cardId: id,
    options: {
      onSuccess: (applied) => {
        if (applied == null) {
          return
        }

        if (applied.status === APPLY_STATUS.COMPLETE) {
          open({
            title: '이미 발급이 완료된 카드입니다',
            onButtonClick: () => {
              window.history.back()
            },
          })

          return
        }

        setReadyPoll(true) // 카드사로 재심사요청
      },
      onError: () => {},
      suspense: true,
    },
  })

  usePollApplyStatus({
    onSuccess: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.COMPLETE,
        },
      })
      navigate('/apply/done?success=true', {
        replace: true,
      })
    },
    onError: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.REJECT,
        },
      })
      navigate('/apply/done?success=false')
    },
    enabled: readyToPoll,
  })

  const { mutate, isLoading: 카드를신청중인가 } = useApplyCardMutation({
    onSuccess: () => {
      setReadyPoll(true)
    },
    onError: () => {
      window.history.back()
    },
  })

  if (data != null && data.status === APPLY_STATUS.COMPLETE) {
    return null
  }

  if (readyToPoll || 카드를신청중인가) {
    return <FullPageLoader message="카드를 신청중입니다" />
  }

  return (
    <div>
      <Apply onSubmit={mutate} />
    </div>
  )
}

export default ApplyPage
