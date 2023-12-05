import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
  likedAttractions: [],
  addLikedAttraction: (attraction) =>
    set(
      (state) => ({
        likedAttractions: [...state.likedAttractions, attraction],
      }),
      false,
      'addLikedAttraction',
    ),
  deleteLikedAttraction: (id) =>
    set(
      (state) => ({
        likedAttractions: state.likedAttractions.filter(
          (attraction) => attraction.attractionId !== id,
        ),
      }),
      false,
      'deleteLikedAttraction',
    ),
  isAttractionLiked: false,
  setAttractionLiked: (id) =>
    set(
      (state) => ({
        isAttractionLiked: state.likedAttractions.some(
          (attraction) => attraction.attractionId === id,
        ),
      }),
      false,
      'setAttractionLiked',
    ),
})

export const useStore = create(persist(devtools(store), { name: 'store' }))
