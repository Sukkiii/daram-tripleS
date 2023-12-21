import { Box } from '@mui/material'
import { useState } from 'react'

function GalleryComponent({ lodgingData }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <Box className="container p-4 mx-auto">
      <Box className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {/* Main image */}
        <Box className="md:col-span-3">
          <img
            className="object-cover w-full h-full overflow-hidden rounded shadow-lg"
            src={`/src/assets/img/hotel/${lodgingData.lodging.mainImage}`}
            alt="Main Gallery"
          />
        </Box>

        {/* Other images */}
        <Box className="grid grid-cols-2 grid-rows-2 gap-4 md:col-span-2">
          {lodgingData.lodging.image.slice(0, 4).map((image, index) => (
            <Box key={index} className="overflow-hidden rounded shadow-lg">
              <img
                className="object-cover w-full h-full"
                src={`/src/assets/img/hotel/${image}`}
                alt={`Gallery ${index + 1}`}
              />
            </Box>
          ))}
        </Box>

        {/* View all photos button */}
        <Box className="flex items-center justify-center md:col-start-5 md:row-start-2">
          <button
            className="px-4 py-2 text-lg font-semibold bg-white rounded-lg shadow-lg hover:bg-gray-100 whitespace-nowrap"
            onClick={() => setShowModal(true)}
          >
            사진 모두보기
          </button>
        </Box>

        {/* Modal for all photos */}
        {showModal && (
          <Box
            className="fixed inset-0 w-full h-full overflow-y-auto bg-black bg-opacity-50"
            onClick={() => setShowModal(false)}
          >
            <Box className="absolute top-0 w-11/12 p-5 mx-auto bg-white border rounded-md shadow-lg">
              <Box className="mt-3 text-center">
                <Box className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                  {/* Close button */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-6 h-6 text-green-600"
                    aria-label="Close"
                  >
                    X
                  </button>
                </Box>
                {/* All images */}
                <Box className="py-3 mt-2 px-7">
                  <Box className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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
