import { Box } from '@mui/material'
import HeaderLogo from './Header/HeaderLogo'
import FunctionOptions from './Header/FunctionOptions'
import NavigationBar from './Header/NavigationBar'
import Hotel from './Filtering/Hotel'

function CommonHeader() {
  return (
    <Box className="main-hd-container relative bg-hotel-bg bg-cover pb-20">
      <Box className="main-hd-flex-icon px-8 flex">
        <HeaderLogo />
        <Box className="flex items-center ml-4">
          <NavigationBar />
        </Box>
        <FunctionOptions />
      </Box>
      <Box className="flex mx-auto p-5 bg-white w-4/5 h-2/4 rounded-xl mt-4 mb-12">
        <Hotel />
      </Box>
    </Box>
  )
}
export default CommonHeader
