import { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import SouthKoreaFlag from '../../../assets/img/SouthKorea.png'
import AuthModal from '../User/AuthModal'
import AuthLogin from '../User/AuthLogin'
import AuthSignup from '../User/AuthSignup'
import fetchLogout from '../../../fetch/fetchLogout'

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
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loginToken = localStorage.getItem('login-token')
    setIsLoggedIn(!!loginToken)
  }, [])

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const result = await fetchLogout()

      if (result) {
        localStorage.removeItem('login-token')
        setIsLoggedIn(false)
        await Swal.fire({
          title: '로그아웃 되었습니다',
          icon: 'success',
          confirmButtonText: '확인',
        })
        navigate('/')
      } else {
        await Swal.fire({
          title: '로그아웃 실패',
          icon: 'error',
          confirmButtonText: '확인',
        })
      }
    } catch (error) {
      await Swal.fire({
        title: '로그아웃 중 오류가 발생했습니다',
        icon: 'error',
        confirmButtonText: '확인',
      })
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

LoginForm.propTypes = {
  onSwitchToSignup: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

SignupForm.propTypes = {
  onSwitchToLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default FunctionOptions
