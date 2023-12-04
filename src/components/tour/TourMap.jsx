import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef, useState, useEffect } from 'react'

import L from 'leaflet'
import { Box, Typography } from '@mui/material'
import styles from './TourMap.module.css'
import TourItem from '../search/TourItem'
import TourPopupItem from './TourPopupItem'
import markerMain from '../../assets/img/attraction/markerMain.png'
import markerOthers from '../../assets/img/attraction/markerOthers.png'

export default function TourMap({ attractions, mainAttraction }) {
  if (!mainAttraction || attractions?.length === 0) {
    return <Box>Loading...</Box>
  }

  const markerRef = useRef(null)
  const [hoveredattractionId, setHoveredattractionId] = useState(null)

  const hoverattraction = (attractionId) => {
    if (attractionId !== hoverattraction) setHoveredattractionId(attractionId)
    else setHoveredattractionId(null)
  }
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup()
    }
  }, [hoveredattractionId])

  return (
    <Box className="flex gap-2 max-h-145 w-full p-3 border shadow-md shadow-gray-200">
      <MapContainer
        style={{ width: 750, height: 650 }}
        center={[mainAttraction.map.latitude, mainAttraction.map.longitude]}
        zoom={11}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          key={mainAttraction.attractionId}
          position={[mainAttraction.map.latitude, mainAttraction.map.longitude]}
          icon={
            new L.Icon({
              iconUrl: markerMain,
              iconSize: [45, 45],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            })
          }
        />
        {attractions.map((attraction) => (
          <Marker
            key={attraction.attractionId}
            position={[attraction.map.latitude, attraction.map.longitude]}
            ref={
              hoveredattractionId === attraction.attractionId ? markerRef : null
            }
            eventHandlers={{
              mouseover: () => hoverattraction(attraction.attractionId),
              mouseout: () => hoverattraction(attraction.attractionId),
            }}
            icon={
              attraction.attractionId === hoveredattractionId
                ? new L.Icon({
                    iconUrl: markerOthers,
                    iconSize: [35, 35],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                  })
                : new L.Icon({
                    iconUrl: markerOthers,
                    iconSize: [30, 30],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                  })
            }
          >
            <Popup
              offset={[0, -1]}
              className="w-40 group m-0 p-0 flex flex-col overflow-hidden bg-white"
            >
              <TourPopupItem attraction={attraction} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <Box className="flex flex-col gap-3 overflow-y-auto">
        <Typography
          className="text-gray-900"
          style={{
            display: 'inline',
            fontWeight: 600,
            fontSize: '1.1rem',
          }}
          variant="body1"
          component="span"
        >
          {mainAttraction.name} 주변에서 인기있는 추천명소
        </Typography>
        <ul>
          {attractions.map((attraction) => (
            <li
              key={attraction.attractionId}
              onMouseEnter={() => hoverattraction(attraction.attractionId)}
              onMouseLeave={() => hoverattraction(attraction.attractionId)}
            >
              <TourItem attraction={attraction} smallCard="small" />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}
