import { Box } from '@mui/material'
import HeaderLogo from './Header/HeaderLogo'
import FunctionOptions from './Header/FunctionOptions'
import NavigationBar from './Header/NavigationBar'
import Filtering from './Filtering/Filtering'

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
      <Filtering />
    </Box>
  )
}
export default CommonHeader
