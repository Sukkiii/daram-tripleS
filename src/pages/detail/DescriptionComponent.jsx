/* eslint-disable react/prop-types */
import { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import InfoIcon from '@mui/icons-material/Info'
import HelpIcon from '@mui/icons-material/Help'
import DangerousIcon from '@mui/icons-material/Dangerous'
import { Box, Typography, Button } from '@mui/material'

function DescriptionComponent({ lodgingData }) {
  const [showModal, setShowModal] = useState(false)
  const hostId = 'TripleSManager'

  const getIcon = (optionType) => {
    switch (optionType) {
      case '프론트서비스':
        return <CheckCircleOutlineIcon className='w-5 h-5 text-green-500' />
      case 'info':
        return <InfoIcon className='w-5 h-5 text-blue-500' />
      case 'question':
      default:
        return <HelpIcon className='w-5 h-5 text-yellow-500' />
    }
  }

  return (
    <Box className='flex flex-col w-full pt-4'>
      <Box className='flex items-center justify-between mb-4'>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb={2}>
            {hostId}, 호스팅하는 호텔
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            차량 주차 1대 · 손님 최대 3명 가능
          </Typography>
        </Box>
        <Box className='flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full'>
          {/* Replace with logo */}
          <Typography className='text-lg text-white'>
            {hostId.substring(0, 2).toLowerCase()}
          </Typography>
        </Box>
      </Box>

      <Box className='mb-4 space-y-2'>
        {lodgingData.lodging.option.map((option) => (
          <Box key={option.id} className='flex items-center'>
            {getIcon(option.category)}
            <Typography className='ml-2 text-sm'>{option.details}</Typography>
          </Box>
        ))}
      </Box>

      <Box className='p-4 shadow-md bg-gray-50 rounded-xl'>
        <Typography variant='body2' className='mb-2'>
          특별한 정보는 자동 번역되었습니다.
        </Typography>
        <Typography variant='body2' color='primary' component='a' href='#'>
          원문 보기
        </Typography>
        <Typography variant='body2' className='mb-2'>
          {lodgingData.lodging.rule}
        </Typography>
        <Typography variant='body2'>
          {lodgingData.lodging.description}
        </Typography>
        <Box className='mt-4'>
          <Button
            variant='contained'
            size='small'
            onClick={() => setShowModal(true)}
          >
            더보기
          </Button>
        </Box>
      </Box>

      {/* Modal for more information */}
      {showModal && (
        <Box
          className='fixed inset-0 flex z-[10000] items-start justify-center w-full h-full overflow-y-auto bg-black bg-opacity-50'
          onClick={() => setShowModal(false)}
        >
          <Box
            className='relative flex flex-row-reverse gap-5 p-5 m-auto bg-white border rounded-md shadow-lg'
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <Box className='flex items-start justify-end cursor-pointer'>
              <DangerousIcon
                className='w-6 h-6 fill-blue-700'
                color='primary'
                onClick={() => setShowModal(false)}
              />
            </Box>
            <Box className='flex flex-col gap-4'>
              <Box className='box1'>
                <Typography
                  variant='h6'
                  className='mb-2 text-xl font-semibold'
                  color='primary'
                >
                  숙소 설명
                </Typography>
                <Typography variant='body2' className='mb-4'>
                  {lodgingData.lodging.description}
                </Typography>
              </Box>
              <Box className='box2'>
                <Typography
                  variant='h6'
                  className='mb-2 text-xl font-semibold'
                  color='primary'
                >
                  숙소
                </Typography>
                <Typography variant='body2' className='mb-2'>
                  {lodgingData.lodging.theme}
                </Typography>
              </Box>
              <Box className='box3'>
                <Typography
                  variant='h6'
                  className='mb-2 text-xl font-semibold'
                  color='primary'
                >
                  운영 시간
                </Typography>
                <Typography variant='body2' className='mb-2'>
                  {lodgingData.lodging.rule}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default DescriptionComponent
