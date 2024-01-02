import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Button } from '@mui/base'

function SideBar({ keyword }) {
  const { pathname } = useLocation()
  const path = pathname.split('/')[1]
  const [btnClasses, setBtnClasses] = useState({
    tour: '',
    hotel: '',
    all: '',
  })

  useEffect(() => {
    const updateBtnClasses = () => {
      if (path === 'searchTourList') {
        setBtnClasses(() => ({
          tour: 'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start bg-blue-600 text-gray-50',
          hotel:
            'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900',
          all: 'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900',
        }))
      } else if (path === 'searchHotelList') {
        setBtnClasses(() => ({
          tour: 'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900',
          hotel:
            'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start bg-blue-600 text-gray-50',
          all: 'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900',
        }))
      } else if (path === 'searchList') {
        setBtnClasses(() => ({
          tour: 'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900',
          hotel:
            'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900',
          all: 'btn min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start bg-blue-600 text-gray-50',
        }))
      }
    }

    updateBtnClasses()
  }, [path])

  return (
    <Box className="min-w-[250px] relative flex gap-1 overflow-x-auto p-2 font-sans text-base font-normal text-gray-700 sm:flex-row md:flex-row lg:flex-col">
      <Link to={`/searchList/${keyword}`}>
        <Button tabIndex={-1} className={btnClasses.all}>
          <Typography
            variant="body1"
            className="w-[200px] leading-5"
            style={{ fontSize: '1.05rem' }}
          >
            전체
          </Typography>
        </Button>
      </Link>
      <Link to={`/searchHotelList/${keyword}`}>
        <Button tabIndex={-1} className={btnClasses.hotel}>
          <Typography
            variant="body1"
            className="w-[200px] leading-5"
            style={{ fontSize: '1.05rem' }}
          >
            호텔
          </Typography>
        </Button>
      </Link>
      <Link to={`/searchTourList/${keyword}`}>
        <Button tabIndex={-1} className={btnClasses.tour}>
          <Typography
            variant="body1"
            className="w-[200px] leading-5"
            style={{ fontSize: '1.05rem' }}
          >
            여행지
          </Typography>
        </Button>
      </Link>
    </Box>
  )
}

export default SideBar
