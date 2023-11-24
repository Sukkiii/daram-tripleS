import React from 'react'
import PropTypes from 'prop-types'
import { Link, Typography } from '@mui/material'

function ItemFooter({ Links, title }) {
  return (
    <ul>
      <Typography style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
        {title}
      </Typography>

      {Links.map((link) => (
        <li className="mb-3" key={link.name || link.image}>
          <Link
            style={{
              color: '#172554',
              textDecoration: 'none',
              fontSize: '0.875rem',
              lineHeight: '1.5',
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
              <img
                src={link.image}
                alt={link.name}
                className="w-12 h-15 border border-solid border-blue-900 rounded-md mt-3"
              />
            )}
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
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
