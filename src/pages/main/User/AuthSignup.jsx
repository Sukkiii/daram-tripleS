import { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router'
import showSwal from '../../../assets/util/showSwal'
import FetchSignUp from '../../../fetch/fetchSignup'
import {
  isValidEmailFormat,
  isValidNameFormat,
  isValidPasswordFormat,
} from '../../../assets/validation/validationSingup'

function AuthSignUp() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidName, setIsValidName] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value
    const isValid = isValidEmailFormat(inputEmail)
    setEmail(inputEmail)
    setIsValidEmail(isValid)
  }

  const handleNameChange = (e) => {
    const inputName = e.target.value
    const isValid = isValidNameFormat(inputName)
    setName(inputName)
    setIsValidName(isValid)
  }

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value
    const isValid = isValidPasswordFormat(inputPassword)
    setPassword(inputPassword)
    setIsValidPassword(isValid)
  }

  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value
    setConfirmPassword(inputConfirmPassword)

    if (inputConfirmPassword !== password) {
      setIsValidConfirmPassword(false)
    } else {
      setIsValidConfirmPassword(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await FetchSignUp(email, name, password, address, false)

      showSwal('환영합니다! 로그인을 해주세요!', 'success')
      navigate('/hotel')
    } catch (error) {
      showSwal('회원가입 중 오류가 발생했습니다', 'error')
    }
  }

  return (
    <Box className='flex flex-col w-4/5 m-auto p-6 rounded h-fit gap-2'>
      <Typography
        display='flex'
        alignItems='flex-start'
        id='modal-modal-title'
        variant='h5'
        fontWeight='bold'
      >
        회원가입
      </Typography>
      <Typography variant='caption' color='textSecondary'>
        간편하게 예약을 관리하고 회원 전용 혜택도 누려보세요
      </Typography>
      <Box
        className='mt-6 w-full flex flex-col gap-2'
        component='form'
        noValidate
        autoComplete='off'
      >
        <TextField
          type='email'
          value={email}
          className={`w-full ${isValidEmail ? 'valid' : 'invalid'}`}
          id='outlined-basic'
          label='이메일'
          placeholder='이메일을 입력해주세요'
          variant='outlined'
          onChange={handleEmailChange}
        />
        {!isValidEmail && email.length > 0 && (
          <Box className='text-red-500 text-xs'>
            유효하지 않은 이메일 형식입니다. <br /> ex) triples@gamil.com과 같은
            형식으로 입력해주세요.
          </Box>
        )}
        <TextField
          type='text'
          value={name}
          className={`w-full ${isValidName ? 'valid' : 'invalid'}`}
          id='outlined-basic'
          label='이름'
          placeholder='이름을 입력해주세요'
          variant='outlined'
          onChange={handleNameChange}
        />
        {!isValidName && name.length > 0 && (
          <Box className='text-red-500 text-xs'>
            이름은 2글자 이상이어야 합니다.
          </Box>
        )}
        <TextField
          type='password'
          value={password}
          className={`w-full ${isValidPassword ? 'valid' : 'invalid'}`}
          id='outlined-basic'
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          variant='outlined'
          onChange={handlePasswordChange}
        />
        {!isValidPassword && password.length > 0 && (
          <Box className='text-red-500 text-xs'>
            비밀번호는 6자 이상이어야 하며, 대문자, 소문자, 숫자, 특수 문자를
            모두 포함해야 합니다.
          </Box>
        )}
        <TextField
          type='password'
          value={confirmPassword}
          className={`w-full ${isValidConfirmPassword ? 'valid' : 'invalid'}`}
          id='confirmPassword'
          label='비밀번호 확인'
          placeholder='비밀번호를 다시 입력해주세요'
          variant='outlined'
          onChange={handleConfirmPasswordChange}
        />
        {!isValidConfirmPassword && confirmPassword.length > 0 && (
          <Box className='text-red-500 text-xs'>
            비밀번호가 일치하지 않습니다.
          </Box>
        )}
        <TextField
          type='text'
          value={address}
          className='w-full'
          id='outlined-basic'
          label='주소'
          placeholder='주소를 입력해주세요'
          variant='outlined'
          onChange={(e) => {
            setAddress(e.target.value)
          }}
        />
        <Button
          onClick={handleSubmit}
          variant='contained'
          className='w-full h-12'
          sx={{ backgroundColor: 'rgba(0, 0, 255, 0.5)' }}
        >
          회원가입
        </Button>
      </Box>
      <Typography
        sx={{ marginTop: '1rem' }}
        variant='caption'
        color='textSecondary'
      >
        로그인 또는 회원가입 시, TripleS 이용약관 및 개인정보 정책에 동의한
        것으로 간주합니다.
      </Typography>
    </Box>
  )
}

export default AuthSignUp
