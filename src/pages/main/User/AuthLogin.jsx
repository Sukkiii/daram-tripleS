import { useState } from 'react'
import { Box, Typography, TextField, Button, Divider } from '@mui/material'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import { useNavigate } from 'react-router'
import FetchLogin from '../../../fetch/fetchLogin'
import {
  isValidEmailFormat,
  isValidPasswordFormat,
} from '../../../assets/validation/validationSingup'
import AuthFindPwd from './AuthFindPwd'
import FetchGetUserInfo from '../../../fetch/fetchGetUserInfo'
import showSwal from '../../../assets/util/showSwal'
import { useStore } from '../../../components/store/store'

function AuthLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleFindPwd = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value
    const isValid = isValidEmailFormat(inputEmail)
    setEmail(inputEmail)
    setIsValidEmail(isValid)
  }

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value
    const isValid = isValidPasswordFormat(inputPassword)
    setPassword(inputPassword)
    setIsValidPassword(isValid)
  }

  function setCookie(name, value, days) {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000,
    ).toUTCString()
    document.cookie = `${name}=${value}; expires=${expires}; path=/`
  }

  const { likedAttractions, setLikedAttraction } = useStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValidInput =
      isValidEmailFormat(email) && isValidPasswordFormat(password)

    try {
      if (isValidInput) {
        const result = await FetchLogin(email, password)

        if (result) {
          setCookie('accessToken', JSON.stringify(result.data), 7)
          showSwal('반갑습니다 :)', 'success')

          const fetchGetIUserInfo = await FetchGetUserInfo()
          setLikedAttraction(fetchGetIUserInfo.data.favorites.attractions)

          if (fetchGetIUserInfo) {
            navigate('/hotel')
          }
        }
      } else {
        showSwal('이메일, 비밀번호를 확인해주세요!', 'error')
      }
    } catch (error) {
      showSwal('로그인 중 오류가 발생했습니다', 'error')
    }
  }

  return (
    <Box className="flex flex-col absolute p-6 rounded h-fit gap-2">
      <Typography
        display="flex"
        alignItems="flex-start"
        id="modal-modal-title"
        variant="h5"
        fontWeight="bold"
      >
        로그인
      </Typography>
      <Typography variant="caption" color="textSecondary">
        간편하게 예약을 관리하고 회원 전용 혜택도 누려보세요
      </Typography>
      <Box
        className="mt-6 w-full flex flex-col gap-2"
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          type="email"
          value={email}
          className={`w-full ${isValidEmail ? 'valid' : 'invalid'}`}
          id="outlined-basic"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          variant="outlined"
          onChange={handleEmailChange}
        />
        {!isValidEmail && email.length > 0 && (
          <Box className="text-red-500">유효하지 않은 이메일 형식입니다.</Box>
        )}
        <TextField
          type="password"
          value={password}
          className="w-full"
          id="outlined-basic"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          variant="outlined"
          onChange={handlePasswordChange}
        />
        {!isValidPassword && password.length > 0 && (
          <Box className="text-red-500">
            비밀번호는 6자 이상이어야 하며, 대문자, 소문자, 숫자, 특수 문자를
            모두 포함해야 합니다.
          </Box>
        )}
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          className="w-full h-12"
          sx={{ backgroundColor: 'rgba(0, 0, 255, 0.5)' }}
        >
          로그인
        </Button>
      </Box>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
          cursor: 'pointer',
        }}
        onClick={handleFindPwd}
      >
        비밀번호 찾기
      </Typography>
      <AuthFindPwd open={isModalOpen} onClose={handleCloseModal} />
      <Box className="flex justify-center mt-6 relative">
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            width: '100%',
            position: 'absolute',
            top: '50%',
          }}
        />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: '#fff',
            padding: '0 8px',
          }}
        >
          다른 로그인 방식
        </Typography>
      </Box>
      <Box className="flex justify-center m-6">
        <SiNaver className="text-4xl text-white rounded-full bg-green-500 p-2.5 cursor-pointer" />
        <RiKakaoTalkFill className="text-4xl rounded-full bg-yellow-300 p-2 ml-6 cursor-pointer" />
        <FcGoogle className="text-4xl ml-6 rounded-full bg-white-500 p-2 border cursor-pointer" />
      </Box>
      <Typography
        sx={{ marginTop: '3rem' }}
        variant="caption"
        color="textSecondary"
      >
        로그인 또는 회원가입 시, TripleS 이용약관 및 개인정보 정책에 동의한
        것으로 간주합니다.
      </Typography>
    </Box>
  )
}

export default AuthLogin
