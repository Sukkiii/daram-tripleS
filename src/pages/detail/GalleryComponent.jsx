/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material'
import { useState } from 'react'

function GalleryComponent({ lodgingData }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <Box className='container mx-auto mt-4 max-h-145'>
      <Box className='grid grid-cols-1 gap-2 md:grid-cols-4'>
        {/* Main image */}
        <Box className='md:col-span-2'>
          <img
            className='object-cover w-[560px] h-[560px] overflow-hidden rounded shadow-lg'
            src={`/src/assets/img/hotel/${lodgingData.lodging.mainImage}`}
            alt='Main Gallery'
          />
        </Box>

        {/* Other images */}
        <Box className='grid grid-cols-2 grid-rows-2 gap-2 md:col-span-2 h-[560px]'>
          {lodgingData.lodging.image.slice(0, 4).map((image) => (
            <Box key={image.id} className='overflow-hidden rounded shadow-lg'>
              <img
                className='object-cover w-full h-full'
                src={`/src/assets/img/hotel/${image}`}
                alt={`Gallery ${image.id + 1}`}
              />
            </Box>
          ))}
        </Box>

        {/* View all photos button */}
        <Box className='flex items-center justify-end md:col-start-4'>
          <Button
            className='px-4 py-2 text-lg font-semibold bg-white rounded-lg shadow-lg hover:bg-gray-100 whitespace-nowrap'
            variant='outlined'
            onClick={() => setShowModal(true)}
          >
            사진 모두보기
          </Button>
        </Box>

        {/* Modal for all photos */}
        {showModal && (
          <Box
            className='z-[999999] fixed inset-0 w-full h-full overflow-y-auto bg-black bg-opacity-50'
            onClick={() => setShowModal(false)}
          >
            <Box className='p-5 mx-auto bg-white shadow-lg w-fit'>
              <Box className='flex flex-col text-center'>
                <Box className='relative right-0 flex justify-end mb-3'>
                  <Box className='flex justify-end bg-blue-100 rounded-full'>
                    {/* Close button */}
                    <Button
                      onClick={() => setShowModal(false)}
                      className='w-6 h-6 text-blue-600'
                      aria-label='Close'
                    >
                      X
                    </Button>
                  </Box>
                </Box>
                {/* All images */}
                <Box className='flex flex-col mx-auto max-w-[560px] gap-3'>
                  <Box className='mainImage w-[560px] h-[560px]'>
                    <img
                      src={`/src/assets/img/hotel/${lodgingData.lodging.mainImage}`}
                      alt={`Gallery ${lodgingData.lodging.id}`}
                    />
                  </Box>
                  <Box className='elseImage w-[560px] flex flex-col gap-3'>
                    {lodgingData.lodging.image.map((image) => (
                      <img
                        key={image.id}
                        className='object-cover h-[560px]'
                        src={`/src/assets/img/hotel/${image}`}
                        alt={`Gallery ${image.id}`}
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
