import { Box, Typography } from '@mui/material'
import SouthKoreaFlag from '../../../assets/img/SouthKorea.png'

function FunctionOptions() {
  return (
    <Box className="float-right flex text-white cursor-pointer items-center m-3 mr-8 absolute right-0 gap-4">
      <Typography>앱</Typography>
      <Typography>고객센터</Typography>
      <Box className="main-hd-a-tag">
        <img
          src={SouthKoreaFlag}
          alt="South Korea Flag"
          className="flag-ko-KR block w-7 bg-no-repeat"
        />
      </Box>
      <Typography>KRW</Typography>
      <Typography className="relative p-2 rounded-md bg-opacity-30 bg-slate-50">
        예약 검색
      </Typography>
      <Typography className="relative p-2 rounded-md bg-slate-50 text-black">
        로그인 / 회원가입
      </Typography>
    </Box>
  )
}

export default FunctionOptions
