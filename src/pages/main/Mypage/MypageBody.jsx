import { useState } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import MemberInfo from './MemberInfo'
import Reservation from './Reservation'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            p: 3,
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

function MypageBody() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className="flex w-full h-full my-[10rem] mx-[2rem]">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="예약확인" {...a11yProps(0)} />
        <Tab label="내 정보" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Reservation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MemberInfo />
      </TabPanel>
    </Box>
  )
}

export default MypageBody
