/* eslint-disable import/no-unresolved */
import React from 'react'
import { Box, Typography } from '@mui/material'
import SouthKoreaFlag from '../../assets/img/SouthKorea.png'

function FunctionOptions() {
  return (
    <Box className="main-hd-func-con float-right block">
      <Box className="main-hd-func float-right text-white leading-5">
        <Box className="main-hd-option float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
          <Box className="main-hd-mobile-click cursor-pointer relative inline-block p-2">
            <Box className="main-hd-a-tag text-white cursor-pointer leading-5 h-5 inline-block">
              <Typography className="main-hd-mobile-App">앱</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="main-hd-option float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
          <Box className="main-hd-help cursor-pointer relative inline-block p-2">
            <Typography className="main-hd-a-tag text-white cursor-pointer leading-5 h-5 inline-block">
              고객센터
            </Typography>
          </Box>
        </Box>
        <Box className="main-hd-option main-hd-option-locale float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
          <Box className="main-hd-country cursor-pointer relative inline-block p-1">
            <Box className="main-hd-a-tag text-white cursor-pointer leading-5 h-5 inline-block">
              <img
                src={SouthKoreaFlag}
                alt="South Korea Flag"
                className="flag-ko-KR block w-7 h-7 bg-no-repeat"
              />
            </Box>
          </Box>
        </Box>
        <Box className="main-hd-option float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
          <Box className="main-hd-currency cursor-pointer relative inline-block p-2">
            <Typography className="main-hd-currency-cur text-white cursor-pointer leading-5 h-5 inline-block">
              KRW
            </Typography>
          </Box>
        </Box>
        <Box className="main-hd-search-booking float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
          <Typography className="main-hd-search-booking-a-tag cursor-pointer relative flex p-2 h-8 rounded-md font-medium bg-opacity-30 bg-slate-50 items-center">
            예약 검색
          </Typography>
        </Box>
        <Box className="main-hd-account float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
          <Typography className="main-hd-search-booking-a-tag cursor-pointer relative flex p-2 h-8 rounded-md font-medium bg-slate-50 items-center text-black">
            로그인 / 회원가입
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default FunctionOptions
