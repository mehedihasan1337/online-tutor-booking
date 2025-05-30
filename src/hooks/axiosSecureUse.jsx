import axios from 'axios'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'
 const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

const axiosSecureUse = () => {
  const navigate = useNavigate()
  const { logOut } = useAuth()
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res
      },
      async error => {
        // console.log(
        //   'error caught from our very own axios interceptor-->',
        //   error.response
        // )
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          logOut()
          // navigate to login
          navigate('/login')
        }
      }
    )
  }, [logOut, navigate])
  return axiosSecure
}

export default axiosSecureUse
