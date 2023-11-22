import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const DetailHeader = () => {
  const navigate = useNavigate() // 필요한 경우 주석 해제

  const handleBack = () => {
    navigate('/') // 필요한 경우 주석 해제
  }

  return (
    <header className="bg-white shadow-md p-4 flex items-center sticky top-0 z-50">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="back"
        onClick={handleBack}
        className="text-black"
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <Typography variant="h6" component="div" className="text-black text-xl">
        숙소
      </Typography>
    </header>
  )
}

export default DetailHeader
