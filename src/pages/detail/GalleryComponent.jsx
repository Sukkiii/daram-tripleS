import { Box } from '@mui/material'
import React, { useState } from 'react'

const GalleryComponent = ({ lodgingData }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Box className="container mx-auto p-4">
      <Box className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Main image */}
        <Box className="md:col-span-3">
          <img
            className="w-full h-full object-cover rounded overflow-hidden shadow-lg"
            src={`/src/assets/img/hotel/${lodgingData.lodging.mainImage}`}
            alt="Main Gallery"
          />
        </Box>

        {/* Other images */}
        <Box className="md:col-span-2 grid grid-rows-2 grid-cols-2 gap-4">
          {lodgingData.lodging.image.slice(0, 4).map((image, index) => (
            <Box key={index} className="rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={`/src/assets/img/hotel/${image}`}
                alt={`Gallery ${index + 1}`}
              />
            </Box>
          ))}
        </Box>

        {/* View all photos button */}
        <Box className="md:col-start-5 md:row-start-2 flex justify-center items-center">
          <button
            className="text-lg font-semibold px-4 py-2 rounded-lg shadow-lg bg-white hover:bg-gray-100 whitespace-nowrap"
            onClick={() => setShowModal(true)}
          >
            사진 모두보기
          </button>
        </Box>

        {/* Modal for all photos */}
        {showModal && (
          <Box
            className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full"
            onClick={() => setShowModal(false)}
          >
            <Box className="absolute top-0 mx-auto p-5 border w-11/12 shadow-lg rounded-md bg-white">
              <Box className="mt-3 text-center">
                <Box className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  {/* Close button */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-green-600 h-6 w-6"
                    aria-label="Close"
                  >
                    X
                  </button>
                </Box>
                {/* All images */}
                <Box className="mt-2 px-7 py-3">
                  <Box className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {lodgingData.lodging.image.map((image, index) => (
                      <img
                        key={index}
                        className="object-cover"
                        src={image}
                        alt={`Gallery ${index}`}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default GalleryComponent
