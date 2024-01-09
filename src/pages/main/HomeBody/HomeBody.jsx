import { Box } from '@mui/material'
import HotAttraction from './HotAttraction'
import HotLodging from './HotLodging'

function HomeBody() {
  return (
    <Box className='home-body-container w-full m-0 bg-white inline-block min-h-max relative pt-20 top-[-4rem] rounded-t-lg overflow-visible'>
      <Box className='relative flex flex-col w-[1220px] m-auto recommend-modules-wrapper '>
        <HotLodging />
        <HotAttraction />
      </Box>
    </Box>
  )
}

export default HomeBody
