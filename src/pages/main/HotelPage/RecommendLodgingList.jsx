import { useMemo } from 'react'
import { Box, Typography, Link } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

function HotLodgingList({ data }) {
  const lodgings = useMemo(
    () => (data && data.lodging ? data.lodging : []),
    [data],
  )

  return (
    <Box className="hot-container mt-4 relative text-center flex gap-4">
      {lodgings.map((lodging) => (
        <Link
          key={lodging.lodgingId}
          color="inherit"
          underline="none"
          className="hot-hotel-item w-1/4 rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer bg-slate-50 h-fit"
          href={`/hotelDetail/${lodging.lodgingId}`}
        >
          <Box className="rounded-md overflow-hidden h-60">
            <img
              className="hot-hotel-img -w-webkit -h-webkit"
              src={`src/assets/img/hotel/${lodging.mainImage}`}
              alt={`Lodging ${lodging.lodgingId}`}
            />
          </Box>
          <Box className="hot-hotel-content-review align-middle my-auto relative text-left ml-4 top-[-1rem] rounded-xl w-fit bg-white pr-3 border-blue-800 border-2">
            <Box className="hot-hotel-content-score bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 inline-block mx-[-1px]">
              <Typography className="leading-4 flex">
                {lodging.avgRating}
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
              <Box className="hot-hotel-grade ml-1 pb-0.5 align-middle inline-block box-content">
                {[...Array(Math.floor(lodging.avgRating))].map((_, i) => (
                  <StarRateRoundedIcon
                    key={i}
                    className="text-yellow-400 ml-[-5px]"
                  />
                ))}
              </Box>
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
        </Link>
      ))}
    </Box>
  )
}

export default HotLodgingList
