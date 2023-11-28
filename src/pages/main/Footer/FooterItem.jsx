import PropTypes from 'prop-types'
import { Box, Link, Typography, List, ListItem, Avatar } from '@mui/material'

function ItemFooter({ Links, title }) {
  return (
    <List>
      <Typography style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
        {title}
      </Typography>

      {Links.map((link) => (
        <ListItem key={link.name || link.image}>
          <Link
            style={{
              color: '#172554',
              textDecoration: 'none',
              fontSize: '0.875rem',
            }}
            className="cursor-pointer"
            href={link.link}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#2563eb'
              e.currentTarget.style.textDecoration = 'underline'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#172554'
              e.currentTarget.style.textDecoration = 'none'
            }}
          >
            {link.image && (
              <Box
                className="border
              rounded-md px-0.5 border-blue-900 mt-3"
              >
                <Avatar src={link.image} alt={link.name} />
              </Box>
            )}
            {link.name}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

ItemFooter.propTypes = {
  Links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
}

export default ItemFooter
