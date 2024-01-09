import { Typography, Box, TextField, Button } from '@mui/material'
import { FaHotel } from 'react-icons/fa6'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { IoMdPerson } from 'react-icons/io'
import { IoSearch, IoAirplane, IoRemoveOutline } from 'react-icons/io5'

function AirHotel() {
  return (
    <>
      <Box className='flex mb-5 text-blue-900'>
        <Box className='flex w-3/4'>
          <Box className='flex items-center mr-5 text-sm'>
            <PiAirplaneTiltFill />
            <Typography>왕복</Typography>
          </Box>
          <Box className='flex items-center mr-5 text-sm'>
            <IoMdPerson />
            <Typography>성인 1명 | 객실 1개</Typography>
          </Box>
        </Box>
      </Box>

      <Box className='flex'>
        <Box className='mt-12'>
          <Typography className='flex items-center justify-center w-10 h-full p-2 text-white bg-blue-600 rounded-l'>
            <PiAirplaneTiltFill className='text-xs' />
          </Typography>
        </Box>
        <Box className='w-1/4'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>출발지</Typography>
          </Box>
          <Box>
            <TextField placeholder='서울' />
          </Box>
        </Box>

        <Box className='flex items-center mt-12 ml-[-4rem] mr-2'>
          <IoAirplane className='p-1 text-2xl text-blue-600 border-2 border-blue-600 rounded-full' />
        </Box>

        <Box className='w-1/4'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>도착지</Typography>
          </Box>
          <Box>
            <TextField placeholder='도시명 또는 공항명' />
          </Box>
        </Box>

        <Box className='w-1/5 ml-[-3rem]'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>가는편</Typography>
          </Box>
          <Box>
            <TextField
              type='date'
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
            />
          </Box>
        </Box>

        <Box className='flex items-center mx-1 mt-12'>
          <IoRemoveOutline />
        </Box>

        <Box className='w-1/5'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>오는편</Typography>
          </Box>
          <Box>
            <TextField
              type='date'
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
            />
          </Box>
        </Box>
      </Box>

      <Box className='flex mt-3'>
        <Box className='mt-12'>
          <Typography className='flex items-center justify-center w-auto p-2 text-white bg-blue-600 rounded-l h-14'>
            <FaHotel className='text-xs' />
          </Typography>
        </Box>
        <Box className='w-7/12'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>도착지</Typography>
          </Box>
          <Box>
            <TextField
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
              placeholder='도시'
            />
          </Box>
        </Box>

        <Box className='w-1/4 ml-4'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>체크인</Typography>
          </Box>
          <Box>
            <TextField
              type='date'
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
            />
          </Box>
        </Box>

        <Box className='flex items-center mx-6 mt-12'>
          <Typography className='flex items-center text-xs text-center'>
            박
          </Typography>
        </Box>

        <Box className='w-1/4'>
          <Box className='flex p-3 text-grey-700'>
            <Typography className='text-xs'>체크아웃</Typography>
          </Box>
          <Box>
            <TextField
              type='date'
              className='w-full p-3 text-sm outline-none focus:border-b-2 focus:border-blue-500'
            />
          </Box>
        </Box>

        <Box className='flex items-center w-2/12 mt-12 ml-2'>
          <Button variant='contained' className='w-auto h-14'>
            <IoSearch className='text-xl' />
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default AirHotel
