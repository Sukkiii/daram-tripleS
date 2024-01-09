import { Box, Link, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import dummyData from '../../../assets/dummyData/dummyData'

const { navCategories } = dummyData

function NavigationBar() {
  const location = useLocation()

  return (
    <ul className='flex flex-row h-full main-hd-nav whitespace-nowrap'>
      {navCategories.map((category) => (
        <li
          key={category.categoryCode}
          className='relative flex items-center float-none pr-6 main-hd-nav-item'
        >
          <Link
            underline='none'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              height: '2rem',
              fontSize: '1rem',
              textDecoration: 'none',
            }}
            href={`/${category.categoryName[0]}`}
            title='{category.title}'
          >
            {category.title}
            {category.categoryName.some((name) =>
              location.pathname.includes(`/${name}`),
            ) && <Box className='w-full h-0.5 bg-white bottom-0' />}
          </Link>
          {category.newCategory === 'true' && (
            <Typography
              style={{ fontSize: '0.75rem ' }}
              className='new-category-add inline-block bg-red-500 text-white py-0.5 px-1 ml-2 relative rounded-sm h-5'
            >
              신규
            </Typography>
          )}
        </li>
      ))}
    </ul>
  )
}

export default NavigationBar
