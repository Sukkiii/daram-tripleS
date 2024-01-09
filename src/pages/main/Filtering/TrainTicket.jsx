import { CheckBox } from '@mui/icons-material'
import { Typography, Box, TextField, Button } from '@mui/material'
import { IoMdTrain } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

function TrainTicket() {
  return (
    <>
      <Box className='flex mb-5 text-blue-900'>
        <Box className='flex items-center'>
          <CheckBox type='checkBox' className='mr-2' />
          <Typography className='text-sm'>중국</Typography>
        </Box>
        <Box className='flex items-center m-2'>
          <CheckBox type='checkBox' className='mr-2' />
          <Typography className='text-sm'>영국</Typography>
        </Box>
        <Box className='flex items-center'>
          <CheckBox type='checkBox' className='mr-2' />
          <Typography className='text-sm'>국내</Typography>
        </Box>
        <Box className='flex items-center m-2'>
          <CheckBox className='mr-2' />
          <Typography className='text-sm'>유럽</Typography>
        </Box>
      </Box>
      <Box className='flex'>
        <Box className='w-2/12 rounded-l'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>출발지</Typography>
          </Box>
          <Box>
            <TextField
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
              placeholder='서울'
            />
          </Box>
        </Box>
        <Box className='flex items-center mx-2.5 mt-12'>
          <IoMdTrain className='p-1 text-2xl text-blue-600 border-2 border-blue-600 rounded-full' />
        </Box>
        <Box className='w-2/12'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>도착지</Typography>
          </Box>
          <Box>
            <TextField
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
              placeholder='부산'
            />
          </Box>
        </Box>
        <Box className='w-2/12 mx-2'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>출발 시간</Typography>
          </Box>
          <Box>
            <TextField
              type='date'
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
            />
          </Box>
        </Box>
        <Box className='w-2/12'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>승객</Typography>
          </Box>
          <Box>
            <TextField
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
              placeholder='5명'
            />
          </Box>
        </Box>
        <Box className='mt-12 ml-1'>
          <Button
            variant='contained'
            className='flex items-center w-auto p-2 text-xl text-white transition duration-300 ease-in-out bg-blue-600 rounded-r-lg h-14 hover:bg-opacity-70'
          >
            <IoSearch className='text-2xl' />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default TrainTicket
