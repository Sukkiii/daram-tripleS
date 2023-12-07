import { useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import BedIcon from '@mui/icons-material/Bed'
import PersonIcon from '@mui/icons-material/Person'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import ArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded'

function HotelSearchList({ searchResults }) {
  const lodgings = useMemo(() => searchResults || [], [searchResults])

  const averageRatingText = (averageRating) => {
    switch (true) {
      case averageRating >= 4:
        return '훌륭함'
      case averageRating >= 3:
        return '아주좋음'
      case averageRating >= 2:
        return '좋음'
      default:
        return '적당함'
    }
  }

  return (
    <Box className="hot-container w-full relative text-center flex flex-col gap-5">
      {lodgings.map((lodging) => (
        <Link
          key={lodging.lodgingId}
          color="inherit"
          underline="none"
          to={`/hotelDetail/${lodging.lodgingId}`}
        >
          <Box
            className="hot-hotel-item rounded-md shadow-md overflow-hidden flex p-4 gap-4
          cursor-pointer bg-slate-50"
          >
            <Box className="rounded-md overflow-hidden w-80 h-80">
              <img
                className="hot-hotel-img -w-webkit -h-webkit"
                src={`/src/assets/img/hotel/${lodging.mainImage}`}
                alt={`Lodging ${lodging.lodgingId}`}
              />
            </Box>
            <Box className="hot-hotel-content-review align-middle relative text-left border-none ml-3 flex flex-col border-2 overflow-hidden gap-4 w-3/4">
              <Box className="flex">
                <Typography variant="h5"> {lodging.hotelName} </Typography>
                <Box className="ml-3">
                  {[...Array(Math.floor(lodging.averageRating))].map((_, i) => (
                    <StarRateRoundedIcon
                      key={i}
                      className="text-yellow-400 ml-[-5px]"
                    />
                  ))}
                </Box>
              </Box>
              <Box className="flex gap-2">
                <Box className="bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 flex">
                  <Typography>{lodging.averageRating}</Typography>
                  <Typography
                    style={{
                      fontSize: '0.9rem',
                      opacity: '50%',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignContent: 'flex-end',
                    }}
                  >
                    /5
                  </Typography>
                </Box>
                <Typography
                  style={{
                    fontWeight: '600',
                  }}
                  variant="subtitle1"
                  className="text-blue-800"
                >
                  {averageRatingText(lodging.averageRating)}
                </Typography>
                <Typography variant="subtitle1">
                  리뷰 {lodging.reviewCount}개
                </Typography>
                {lodging.theme.map((theme, i) => (
                  <Typography
                    key={i}
                    variant="subtitle1"
                    className="text-blue-800"
                  >
                    "{theme}"
                  </Typography>
                ))}
              </Box>
              <Box className="flex gap-1">
                <BedIcon />
                <PersonIcon />
                <ChildCareIcon />
              </Box>
              <Box className="hot-hotel-content flex flex-col items-end justify-end gap-1 text-right mt-auto">
                <Typography
                  variant="subtitle1"
                  className="inline-block text-gray-500"
                >
                  최저가
                </Typography>
                <Typography
                  style={{
                    fontWeight: '700',
                  }}
                  variant="h5"
                  className="price-content inline-block"
                >
                  {lodging.minPrice.toLocaleString()}원
                </Typography>
                <Link to={`/hotelDetail/${lodging.lodgingId}`}>
                  <Button variant="contained">
                    최저가 예약하러 가기 <ArrowRightIcon />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default HotelSearchList
