import nookies from 'nookies'
import axios from '../../core/axios'
import * as Api from '../../api'
import { GetServerSidePropsContext } from 'next'

export const checkIsAuth = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx)

  axios.defaults.headers.Authorization = 'Bearer' + _token

  try {
    await Api.auth.getMe()
    return true
  } catch (_) {
    return false
  }
}
