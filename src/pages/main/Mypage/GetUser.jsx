import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'email', headerName: 'email', width: 130 },
  {
    field: 'level',
    headerName: 'level',
    type: 'number',
    width: 90,
  },
]

const rows = [
  { id: 1, name: 'Snow', email: 'Jon', level: 35 },
  { id: 2, name: 'Snow', email: 'Jon', level: 35 },
  { id: 3, name: 'Snow', email: 'Jon', level: 35 },
  { id: 4, name: 'Snow', email: 'Jon', level: 35 },
  { id: 5, name: 'Snow', email: 'Jon', level: 35 },
  { id: 6, name: 'Snow', email: 'Jon', level: 35 },
  { id: 7, name: 'Snow', email: 'Jon', level: 35 },
]

export default function DataTable() {
  return (
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  )
}
