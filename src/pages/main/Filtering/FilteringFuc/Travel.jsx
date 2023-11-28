import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { styled, lighten, darken } from '@mui/system'
import { FormControl } from '@mui/base'
import { InputLabel, List } from '@mui/material'
import travelListData from '../../../../assets/dummyData/travelListData'

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

export default function RenderGroup() {
  const { travelList } = travelListData

  return (
    <Autocomplete
      className="w-3/4 mt-3"
      id="grouped-demo"
      options={travelList}
      groupBy={(option) => option.genre}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <FormControl>
          <InputLabel htmlFor="travel-search">여행지</InputLabel>
          <TextField
            {...params}
            id="travel-search"
            placeholder="도시, 공항, 지역, 랜드마크, 호텔 이름으로 검색"
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
