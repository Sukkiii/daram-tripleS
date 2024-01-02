import { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import InfoIcon from '@mui/icons-material/Info'
import HelpIcon from '@mui/icons-material/Help'
import DangerousIcon from '@mui/icons-material/Dangerous'
import { Box, Typography, Button } from '@mui/material'

function DescriptionComponent({ lodgingData }) {
  const [showModal, setShowModal] = useState(false)

  const getIcon = (optionType) => {
    switch (optionType) {
      case '프론트서비스':
        return <CheckCircleOutlineIcon className="w-5 h-5 text-green-500" />
      case 'info':
        return <InfoIcon className="w-5 h-5 text-blue-500" />
      case 'question':
      default:
        return <HelpIcon className="w-5 h-5 text-yellow-500" />
    }
  }

  return (
    <Box className="max-w-lg p-4 mx-auto">
      <Box className="flex items-center justify-between mb-4">
        <Box>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Ddnayo, 호스팅하는 펜션
          </Typography>
          <Typography variant="body2" color="textSecondary">
            차대 일명 · 체험 1개 · 손님 1명
          </Typography>
        </Box>
        <Box className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full">
          {/* Replace with logo */}
          <Typography className="text-lg text-white">dd</Typography>
        </Box>
      </Box>

      <Box className="mb-4 space-y-2">
        {lodgingData.lodging.option.map((option, index) => (
          <Box key={index} className="flex items-center">
            {getIcon(option.category)}
            <Typography className="ml-2 text-sm">{option.details}</Typography>
          </Box>
        ))}
      </Box>

      <Box className="p-4 bg-gray-100">
        <Typography variant="body2" className="mb-2">
          특별한 정보는 자동 번역되었습니다.
        </Typography>
        <Typography variant="body2" color="primary" component="a" href="#">
          원문 보기
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
          className="fixed inset-0 flex items-start justify-center w-full h-full overflow-y-auto bg-black bg-opacity-50"
          onClick={() => setShowModal(false)}
        >
          <Box
            className="relative top-0 w-11/12 p-5 mx-auto mt-10 bg-white border rounded-md shadow-lg md:max-w-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <Box className="flex items-center justify-between mb-4">
              <Typography variant="h5" className="mb-2 text-xl font-semibold">
                숙소 설명
              </Typography>
              <Button
                variant="text"
                color="primary"
                size="small"
                onClick={() => setShowModal(false)}
              >
                <DangerousIcon className="w-6 h-6" />
              </Button>
            </Box>
            <Typography variant="body2" className="mb-4">
              {lodgingData.lodging.description}
            </Typography>
            <Box mb={4}>
              <Typography variant="h5" className="mb-2 text-xl font-semibold">
                숙소
              </Typography>
              <Typography variant="body2" className="mb-2">
                {lodgingData.lodging.theme}
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="h5" className="mb-2 text-xl font-semibold">
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
