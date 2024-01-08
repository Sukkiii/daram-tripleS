import { Box, Typography, Avatar } from '@mui/material'

import FooterItem from './FooterItem'
import {
  CUSTOMER,
  COMPANY,
  SERVICE,
  PAYMENT,
} from '../../../assets/dummyData/dummyDataFooter'

import second1 from '../../../assets/img/FooterImg/second1.png'
import second2 from '../../../assets/img/FooterImg/second2.png'

function Footer() {
  return (
    <Box className='text-blue-950'>
      <Box className='flex w-[1120px] mx-auto border' />
      <Box className='flex justify-center gap-40 px-8 py-12 text-sm'>
        <FooterItem Links={CUSTOMER} title='고객문의' />
        <FooterItem Links={COMPANY} title='회사소개' />
        <FooterItem Links={SERVICE} title='기타 서비스' />
        <FooterItem Links={PAYMENT} title='결제 방법' />
      </Box>

      <Box className='flex w-[1120px] mx-auto border' />
      <Box className='flex justify-center p-2 text-sm text-center'>
        <Box className='flex items-center mx-10 my-5'>
          <Avatar src={second1} alt='affiliate1' className='mr-2 w-9 h-9' />
          <Typography className='text-xs text-center'>
            Contact Center of the year 2022
          </Typography>
        </Box>
        <Box className='flex items-center mx-10'>
          <Avatar src={second2} alt='affiliate2' className='h-10 mr-2 w-50' />
          <Typography className='text-xs text-center'>
            Google Material Design Awards 2019
          </Typography>
        </Box>
      </Box>

      <Box className='flex mx-auto border w-3/' />
      <Box className='flex w-3/4 p-2 mx-auto mt-5 mb-5'>
        <Box
          className='flex flex-col items-center p-3 mx-auto text-sm text-center'
          container
          spacing={2}
        >
          <Typography className='mt-5 mb-5'>
            &copy; 2023 TripleS.com Travel Republic of Korea Pte. Ltd. All
            rights reserved.
          </Typography>
          <Typography>
            사이트 운영자: TripleS.com Travel Republic of Korea Pte. Ltd.
            (라이선스 번호 1234567, 대표 TripleS)
          </Typography>
          <Typography>고객센터: 한국 02 1234 해외 +82 1234 1234</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
