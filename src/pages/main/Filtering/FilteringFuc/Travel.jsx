import { useEffect, useState } from 'react'
import { TextField, Autocomplete, InputLabel, List } from '@mui/material'
import { styled, lighten, darken } from '@mui/system'
import { FormControl } from '@mui/base'
import FetchLocation from '../../../../fetch/fetchLocation'

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}))

const GroupItems = styled('ul')({
  padding: 0,
})

export default function RenderGroup({ filterLocationId }) {
  const [locationList, setLocationList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationData = await FetchLocation()
        setLocationList(locationData)
      } catch (error) {
        console.error('Error setting location data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Autocomplete
      onChange={(_, value) => {
        if (value) {
          filterLocationId(value.locationId)
        }
      }}
      className='mt-3 mr-10'
      id='grouped-demo'
      options={locationList}
      groupBy={(option) => option.country}
      getOptionLabel={(option) => option.city}
      renderInput={(params) => (
        <FormControl>
          <InputLabel htmlFor='travel-search'>여행지</InputLabel>
          <TextField
            {...params}
            id='travel-search'
            placeholder='도시, 공항, 지역, 랜드마크, 호텔 이름으로 검색'
          />
        </FormControl>
      )}
      renderGroup={(params) => (
        <List key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </List>
      )}
    />
  )
}
