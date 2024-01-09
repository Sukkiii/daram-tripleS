/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import MemberInfo from './MemberInfo'
import Reservation from './Reservation'
import LikedAttractions from './LikedAttractions'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role='tabpanel'
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
    <Box className='w-[1220px] h-[1000px] mx-auto'>
      <Box className='flex flex-col'>
        <Box className='flex my-5'>
          <Typography variant='h5'>마이페이지</Typography>
        </Box>
        <Box className='flex'>
          <Tabs
            orientation='vertical'
            variant='scrollable'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label='내 정보' {...a11yProps(0)} />
            <Tab label='예약확인' {...a11yProps(1)} />
            <Tab label='찜한여행지' {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <MemberInfo />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Reservation />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <LikedAttractions />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  )
}

export default MypageBody
