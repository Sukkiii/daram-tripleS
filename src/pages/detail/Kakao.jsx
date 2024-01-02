// import { Map, MapMarker } from 'react-kakao-maps-sdk'
// import React from 'react'
// import { Box, Typography, Button } from '@mui/material'

// function Kakao({ lodgingData }) {
//   return (
//     <>
//       <Box class="border-b border-gray-300 py-4"></Box>
//       <Box className="container mx-auto">
//         <Box className="flex flex-col mt-10">
//           <Box className="flex-grow">
//             <Box className="flex flex-col items-center justify-center w-full">
//               <Box class="container mx-auto px-4 py-2">
//                 <Typography class="text-xl font-semibold text-gray-800">
//                   숙소 위치
//                 </Typography>
//               </Box>
//               <Box className="w-full max-w-4xl">
//                 <Map
//                   center={{
//                     lat: lodgingData.lodging.map.latitude,
//                     lng: lodgingData.lodging.map.longitude,
//                   }}
//                   style={{ width: '100%', height: '600px' }}
//                   level={3}
//                   className="rounded-lg shadow-lg"
//                 >
//                   <MapMarker
//                     position={{
//                       lat: lodgingData.lodging.map.latitude,
//                       lng: lodgingData.lodging.map.longitude,
//                     }}
//                   />
//                 </Map>
//               </Box>
//             </Box>
//           </Box>
//           <Box className="flex-shrink">
//             <Box className="flex justify-between">
//               <Box className="text-xl">{lodgingData.lodging.name}</Box>
//               <Box className="flex">
//                 <Button className="px-4 py-2 text-white bg-gray-500 rounded-md">
//                   +
//                 </Button>
//                 <Button className="px-4 py-2 text-white bg-gray-500 rounded-md">
//                   -
//                 </Button>
//               </Box>
//             </Box>
//             <Box className="text-gray-500">
//               {lodgingData.lodging.description}
//               <a href="#">더 보기</a>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   )
// }

// export default Kakao
