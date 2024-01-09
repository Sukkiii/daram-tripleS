import { useState, useEffect } from 'react'
import { Button } from '@mui/base'
import {
  TextField,
  Container,
  Typography,
  Box,
  InputLabel,
} from '@mui/material'
import showSwal from '../../../assets/util/showSwal'
import FetchGetUserInfo from '../../../fetch/fetchGetUserInfo'
import FetchUpdateUser from '../../../fetch/fetchUpdateUser'

export default function MemberInfo() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  })

  const handleGetUserInfo = async () => {
    try {
      const result = await FetchGetUserInfo()
      if (result) {
        setUserInfo({
          name: result.data.name,
          email: result.data.email,
        })
      }
    } catch (error) {
      showSwal('회원 정보 조회 중 오류가 발생했습니다.', 'error')
    }
  }

  useEffect(() => {
    handleGetUserInfo()
  }, [])

  const handleUpdateUserInfo = async (e) => {
    e.preventDefault()

    try {
      const result = await FetchUpdateUser({
        name: userInfo.name,
        email: userInfo.email,
      })
      if (result) {
        showSwal('회원 정보가 성공적으로 업데이트되었습니다.', 'success')
        handleGetUserInfo()
      }
    } catch (error) {
      showSwal('회원 정보 업데이트 중 오류가 발생했습니다.', 'error')
    }
  }

  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' gutterBottom>
        My 계정
      </Typography>
      <Box className='mt-[2rem]'>
        <InputLabel htmlFor='name'>이름</InputLabel>
        <TextField
          fullWidth
          id='name'
          variant='outlined'
          margin='normal'
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <InputLabel htmlFor='email'>이메일</InputLabel>
        <TextField
          fullWidth
          id='email'
          variant='outlined'
          margin='normal'
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
      </Box>
      <Button
        onClick={handleUpdateUserInfo}
        className='bg-blue-600 text-white mt-[2rem] rounded-md p-2 w-full'
      >
        수정
      </Button>
    </Container>
  )
}
