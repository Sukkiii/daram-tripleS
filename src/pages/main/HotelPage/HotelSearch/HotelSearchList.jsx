import { useMemo } from 'react'
import { Box, Typography, Link } from '@mui/material'

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
            className="hot-hotel-item rounded-md shadow-md overflow-hidden flex p-4
          cursor-pointer bg-slate-50"
          >
            <Box className="rounded-md overflow-hidden w-60 h-60">
              <img
                className="hot-hotel-img -w-webkit -h-webkit"
                src={`/src/assets/img/hotel/${lodging.mainImage}`}
                alt={`Lodging ${lodging.lodgingId}`}
              />
            </Box>
            <Box className="hot-hotel-content-review align-middle relative text-left border-none mx-3 flex flex-col border-2 overflow-hidden gap-4">
              <Typography variant="h5"> {lodging.hotelName} </Typography>
              <Box className="flex">
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
                    display: 'inline-block',
                    color: '#00429b',
                    fontWeight: '600',
                    marginLeft: '0.5rem',
                  }}
                  variant="subtitle1"
                >
                  {averageRatingText(lodging.averageRating)}
                </Typography>
                <Typography
                  style={{
                    display: 'inline-block',
                    marginLeft: '0.5rem',
                  }}
                  variant="subtitle1"
                >
                  리뷰 {lodging.reviewCount}개
                </Typography>
              </Box>
              <Box className="hot-hotel-content p-4 pt-0 flex flex-col gap-1">
                <Box className="hot-hotel-content-label w-full box-border flex gap-2">
                  <Typography
                    className="hot-hotel-name overflow-hidden text-left"
                    variant="h6"
                  >
                    {lodging.name}
                  </Typography>
                </Box>
                <Box className="hot-hotel-content-tag">
                  <Typography
                    style={{ fontSize: '0.8rem' }}
                    className="tag-txt text-left"
                  >
                    {lodging.address}
                  </Typography>
                </Box>
                <Box className="hot-hotel-content-price text-right mt-auto">
                  <Typography
                    style={{
                      color: '#8592a6',
                      verticalAlign: 'middle',
                    }}
                    className="price-from inline-block"
                  >
                    최저가
                  </Typography>
                  <Typography
                    style={{
                      color: '#of294d',
                      fontWeight: '700',
                      marginLeft: '0.25rem',
                    }}
                    variant="h6"
                    className="price-content inline-block"
                  >
                    {lodging.minPrice.toLocaleString()}원
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default HotelSearchList
