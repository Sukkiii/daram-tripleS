import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import HeaderLogo from '../main/Header/HeaderLogo'

function DetailHeader() {
  const navigate = useNavigate() // 필요한 경우 주석 해제

  const handleBack = () => {
    navigate('/') // 필요한 경우 주석 해제
  }

  return (
    <header className="bg-blue-500 flex justify-between items-center py-6">
      <a href="/" className="text-white text-xl font-bold ml-4">
        <HeaderLogo />
      </a>
      <nav className="flex items-center">
        <a href="/wherever" className="text-white mr-10">
          어디든지
        </a>
        <a href="/whenever" className="text-white mr-10">
          언제든지
        </a>
        <a href="/a-week" className="text-white mr-10">
          일주일
        </a>
        <a href="/guests" className="text-white">
          게스트 추가
        </a>
      </nav>
      <a href="/q" className="text-white">
        Q&A
      </a>
      <a href="/host" className="text-white">
        당신의 공간을 TripleS하세요
      </a>
    </header>
  )
}

export default DetailHeader
