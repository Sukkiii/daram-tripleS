import { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router'
import showSwal from '../../../assets/util/showSwal'
import SouthKoreaFlag from '../../../assets/img/SouthKorea.png'
import AuthModal from '../User/AuthModal'
import AuthLogin from '../User/AuthLogin'
import AuthSignup from '../User/AuthSignup'
import FetchLogout from '../../../fetch/fetchLogout'

function LoginForm({ onSwitchToSignup, onClose }) {
  return (
    <>
      <Box className="flex justify-end">
        <Button onClick={onSwitchToSignup}>회원가입</Button>
        <Button onClick={onClose}>X</Button>
      </Box>
      <AuthLogin />
    </>
  )
}

function SignupForm({ onSwitchToLogin, onClose }) {
  return (
    <>
      <Box className="flex justify-end">
        <Button onClick={onSwitchToLogin}>로그인</Button>
        <Button onClick={onClose}>X</Button>
      </Box>
      <AuthSignup />
    </>
  )
}

function FunctionOptions() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1)
      }
    }
    return null
  }

  useEffect(() => {
    const loginToken = getCookie('accessToken')
    setIsLoggedIn(!!loginToken)
  }, [])

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const result = await FetchLogout()

      if (result) {
        deleteCookie('accessToken')
        setIsLoggedIn(false)
        showSwal('이용해주셔서 감사합니다 :)', 'success')
        navigate('/')
      } else {
        showSwal('로그아웃 실패!', 'error')
      }
    } catch (error) {
      showSwal('로그아웃 중 오류가 발생했습니다!', 'error')
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const switchForm = () => {
    setIsLoginForm((prev) => !prev)
  }

  const handleMyPage = (e) => {
    e.preventDefault()
    navigate('/myPage')
  }

  return (
    <Box className="float-right flex text-white cursor-pointer items-center m-3 mr-8 absolute right-0 gap-4">
      <Typography>앱</Typography>
      <Typography>고객센터</Typography>
      <Box className="main-hd-a-tag">
        <img
          src={SouthKoreaFlag}
          alt="South Korea Flag"
          className="flag-ko-KR block w-7 bg-no-repeat"
        />
      </Box>
      <Typography>KRW</Typography>
      <Typography className="relative p-2 rounded-md bg-opacity-30 bg-slate-50">
        예약 검색
      </Typography>
      <Typography
        className="relative p-2 rounded-md bg-slate-50 text-black"
        onClick={isLoggedIn ? handleLogout : openModal}
      >
        {isLoggedIn ? '로그아웃' : '로그인 / 회원가입'}
      </Typography>
      {isLoggedIn && (
        <Typography
          className="relative p-2 rounded-md bg-slate-50 text-black"
          onClick={handleMyPage}
        >
          마이페이지
        </Typography>
      )}
      <AuthModal open={isModalOpen} onClose={closeModal}>
        {isLoginForm ? (
          <LoginForm onSwitchToSignup={switchForm} onClose={closeModal} />
        ) : (
          <SignupForm onSwitchToLogin={switchForm} onClose={closeModal} />
        )}
      </AuthModal>
    </Box>
  )
}

export default FunctionOptions
