import React from 'react'
import { Box, Typography } from '@mui/material'

import FooterItem from './FooterItem'
import {
  CUSTOMER,
  COMPANY,
  SERVICE,
  PAYMENT,
} from '../../assets/dummyData/dummyDataFooter'

import second1 from '../../assets/FooterImg/second1.png'
import second2 from '../../assets/FooterImg/second2.png'

function Footer() {
  return (
    <Box className="text-blue-950">
      <Box className="flex justify-center border-t text-sm gap-24 sm:px-8 px-5 py-16">
        <FooterItem Links={CUSTOMER} title="고객문의" />
        <FooterItem Links={COMPANY} title="회사소개" />
        <FooterItem Links={SERVICE} title="기타 서비스" />
        <FooterItem Links={PAYMENT} title="결제 방법" />
      </Box>

      <Box className="flex justify-center border-t text-sm p-2 text-center">
        <Box className="flex mx-10 items-center my-5">
          <img src={second1} alt="affiliate1" className="w-9 h-9 mr-2" />
          <Typography className="text-center text-xs">
            Contact Center of the year 2022
          </Typography>
        </Box>
        <Box className="flex mx-10 items-center">
          <img src={second2} alt="affiliate2" className="w-23 h-10 mr-2" />
          <Typography className="text-center text-xs">
            Google Material Design Awards 2019
          </Typography>
        </Box>
      </Box>

      <Box className="flex justify-center border-t text-sm p-3 text-center">
        <Box className="mt-5 mb-5">
          &copy; 2023 TripleS.com Travel Republic of Korea Pte. Ltd. All rights
          reserved.
          <br />
          사이트 운영자: TripleS.com Travel Republic of Korea Pte. Ltd.
          (라이선스 번호 1234567, 대표 TripleS)
          <br />
          고객센터: 한국 02 1234 해외 +82 1234 1234
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
