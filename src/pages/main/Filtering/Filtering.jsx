import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Typography, Box } from '@mui/material'

import { FaHotel } from 'react-icons/fa6'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { IoMdTrain } from 'react-icons/io'
import { FaCar } from 'react-icons/fa'
import { IoTicket } from 'react-icons/io5'
import { MdFlightTakeoff } from 'react-icons/md'

import Hotel from './Hotel'
import AirlineTicket from './AirlineTicket'
import TrainTicket from './TrainTicket'
import PickUp from './PickUp'
import Tour from './Tour'
import AirHotel from './AirHotel'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="p-4">
          <Typography component="Box">{children}</Typography>
        </Box>
      )}
    </Box>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Filtering() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className="flex w-3/4 p-2 mx-auto mt-4 mb-12 bg-white h-2/4 rounded-xl">
      <Box className="w-full">
        <Tabs
          value={value}
          centered
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <>
                <FaHotel /> 호텔
              </>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <>
                <PiAirplaneTiltFill /> 항공권
              </>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <>
                <IoMdTrain /> 기차표
              </>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <>
                <FaCar /> 렌터카·공항픽업
              </>
            }
            {...a11yProps(3)}
          />
          <Tab
            label={
              <>
                <IoTicket /> 투어&티켓
              </>
            }
            {...a11yProps(4)}
          />
          <Tab
            label={
              <>
                <MdFlightTakeoff /> 항공 + 호텔
              </>
            }
            {...a11yProps(5)}
          />
        </Tabs>

        {/* 호텔 */}
        <CustomTabPanel value={value} index={0}>
          <Hotel />
        </CustomTabPanel>

        {/* 항공권 */}
        <CustomTabPanel value={value} index={1}>
          <AirlineTicket />
        </CustomTabPanel>

        {/* 기차표 */}
        <CustomTabPanel value={value} index={2}>
          <TrainTicket />
        </CustomTabPanel>

        {/* 렌터카 · 공항픽업 */}
        <CustomTabPanel value={value} index={3}>
          <PickUp />
        </CustomTabPanel>

        {/* 투어 & 티켓 */}
        <CustomTabPanel value={value} index={4}>
          <Tour />
        </CustomTabPanel>

        {/* 항공 + 호텔 */}
        <CustomTabPanel value={value} index={5}>
          <AirHotel />
        </CustomTabPanel>
      </Box>
    </Box>
  )
}
