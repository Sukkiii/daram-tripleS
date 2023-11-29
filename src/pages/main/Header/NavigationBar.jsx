import { Box, Link, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import dummyData from '../../../assets/dummyData/dummyData'

const { navCategories } = dummyData

function NavigationBar() {
  const location = useLocation()

  return (
    <ul className="main-hd-nav flex whitespace-nowrap h-full flex-row">
      {navCategories.map((category) => (
        <li
          key={category.categoryCode}
          className="main-hd-nav-item flex items-center float-none relative pr-8"
        >
          <Link
            underline="none"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              height: '2rem',
              fontSize: '1rem',
              textDecoration: 'none',
            }}
            className="main-hd-nav-link relative pr-1 pb-1 after:block after:h-0.5 after:bg-white after:top-6 after:origin-right transition duration-150 ease-in-out after:scale-x-0"
            href={`/${category.categoryName}`}
            title="{category.title}"
          >
            {category.title}
            {location.pathname === `/${category.categoryName}` && (
              <Box className="w-full h-2 bg-white" />
            )}
          </Link>
          {category.newCategory === 'true' && (
            <Typography
              style={{ fontSize: '0.75rem ' }}
              className="new-category-add inline-block bg-red-500 text-white px-1 mt-1 relative rounded-sm h-5 bottom-0.5"
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
