import { notification } from 'antd'
import { $authHost } from '.'
import { notificationPlacement } from '../consts'

export const httpFetch = async (
  adress: string,
  type: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data: any,
  message = false,
  errorMessage = true,
  messageDuration = 5
) => {
  try {
    const res =
      type === 'GET'
        ? await $authHost.get(adress)
        : type === 'POST'
        ? await $authHost.post(adress, data)
        : type === 'DELETE'
        ? await $authHost.delete(adress, data)
        : type === 'PUT'
        ? await $authHost.put(adress, data)
        : null

    if (message) {
      notification.success({
        message: (
          <p style={{ display: 'inline', fontSize: 13 }}>
            {res?.data.message ? res.data.message : 'Успешно'}
          </p>
        ),
        duration: messageDuration,
        placement: notificationPlacement,
      })
    }
  } catch (e: any) {
    if (e.respnse?.status === 466) {
      window.location.reload()
    }
    if (errorMessage) {
      notification.error({
        message: (
          <p style={{ display: 'inline', fontSize: 13 }}>
            {e.response.data.message ? e.respnse.data.message : e.message}
          </p>
        ),
        duration: messageDuration,
        placement: notificationPlacement,
      })
    }
  }
}
