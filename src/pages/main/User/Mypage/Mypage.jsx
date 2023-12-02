import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import fetchMypage from '../../../../fetch/fetchMypage'

function Mypage() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchMypage().then((res) => setData(res), setLoading(false))
  }, [])
  if (loading) return <Box>로딩중...</Box>
  return (
    <Box>
      <Box>{data?.name}</Box>
      <Box>{data?.age}</Box>
    </Box>
  )
}

export default Mypage
