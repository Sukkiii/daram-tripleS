import React, { useState } from 'react'
import {
  CheckCircleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/solid'
import { Box, Typography, Button } from '@mui/material'

const DescriptionComponent = ({ lodgingData }) => {
  const [showModal, setShowModal] = useState(false)

  const getIcon = (optionType) => {
    switch (optionType) {
      case '프론트서비스':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'info':
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />
      case 'question':
      default:
        return <QuestionMarkCircleIcon className="h-5 w-5 text-yellow-500" />
    }
  }

  return (
    <Box className="max-w-lg mx-auto p-4">
      <Box className="flex justify-between items-center mb-4">
        <Box>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Ddnayo, 호스팅하는 펜션
          </Typography>
          <Typography variant="body2" color="textSecondary">
            차대 일명 · 체험 1개 · 손님 1명
          </Typography>
        </Box>
        <Box className="rounded-full bg-pink-600 h-12 w-12 flex items-center justify-center">
          {/* Replace with logo */}
          <span className="text-white text-lg">dd</span>
        </Box>
      </Box>

      <Box className="space-y-2 mb-4">
        {lodgingData.lodging.option.map((option, index) => (
          <Box key={index} className="flex items-center">
            {getIcon(option.category)}
            <Typography className="ml-2 text-sm">{option.details}</Typography>
          </Box>
        ))}
      </Box>

      <Box className="bg-gray-100 p-4">
        <Typography variant="body2" className="mb-2">
          특별한 정보는 자동 번역되었습니다.
          <Typography variant="body2" color="primary" component="a" href="#">
            원문 보기
          </Typography>
        </Typography>
        <Typography variant="body2" className="mb-2">
          {lodgingData.lodging.rule}
        </Typography>
        <Typography variant="body2">
          {lodgingData.lodging.description}
        </Typography>
        <Box className="mt-4">
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowModal(true)}
          >
            더 보기
          </Button>
        </Box>
      </Box>

      {/* Modal for more information */}
      {showModal && (
        <Box
          className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-start"
          onClick={() => setShowModal(false)}
        >
          <Box
            className="relative top-0 mx-auto p-5 border w-11/12 md:max-w-2xl shadow-lg rounded-md bg-white mt-10"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <Box className="flex justify-between items-center mb-4">
              <Typography variant="h5" className="font-semibold text-xl mb-2">
                숙소 설명
              </Typography>
              <Button
                variant="text"
                color="primary"
                size="small"
                onClick={() => setShowModal(false)}
              >
                <XIcon className="h-6 w-6" />
              </Button>
            </Box>
            <Typography variant="body2" className="mb-4">
              {lodgingData.lodging.description}
            </Typography>
            <Box mb={4}>
              <Typography variant="h5" className="font-semibold text-xl mb-2">
                숙소
              </Typography>
              <Typography variant="body2" className="mb-2">
                {lodgingData.lodging.theme}
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="h5" className="font-semibold text-xl mb-2">
                운영 시간
              </Typography>
              <Typography variant="body2" className="mb-2">
                {lodgingData.lodging.rule}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default DescriptionComponent
