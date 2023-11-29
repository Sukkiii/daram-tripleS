import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

function LogoWriting() {
  return (
    <>
      <Box className="flex justify-center text-white mt-24">
        <Typography variant="h4" fontWeight="bold">
          여행의 시작, TripleS 함께
        </Typography>
      </Box>
      <Box className="flex justify-center text-white mt-2">
        <Box className="mr-4 flex items-center">
          <CheckCircleOutlineIcon />
          <Typography>보다 안전한 안심 결제 시스템</Typography>
        </Box>
        <Box className="flex items-center">
          <CheckCircleOutlineIcon />
          <Typography>24시간 연중무휴 고객센터</Typography>
        </Box>
      </Box>
    </>
  )
}

export default LogoWriting
