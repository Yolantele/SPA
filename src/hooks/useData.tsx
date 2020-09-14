import axios from 'axios'
import { useState, useEffect } from 'react'

type DataHook = (token?: any) => any

const useData: DataHook = (token: any) => {
  const [data, setData] = useState({ user: {}, sitters: [], bookings: {} })
  const params = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const getUserAccount = () => {
    return axios.get(`${process.env.REACT_APP_API}/api/user`, params)
  }

  const getActiveBookings = () => {
    return axios.get(`${process.env.REACT_APP_API}/api/booking/activesummary`, params)
  }

  const getLocalSitters = () => {
    return axios.get(`${process.env.REACT_APP_API}/api/search`, params)
  }
  useEffect(() => {
    if (token !== null) {
      Promise.all([getUserAccount(), getLocalSitters(), getActiveBookings()]).then((res) => {
        console.log(res)
        setData({ user: res[0].data, sitters: res[1].data, bookings: res[2].data })
      })
    }
  }, [token])

  return [data]
}

export default useData
