import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { useQuery } from 'react-query'
import fetchAddLikes from '../../fetch/fetchAddLikes'
import fetchDeleteLikes from '../../fetch/fetchDeleteLikes'

const store = (set, get) => ({
  likedAttractions: [],
  // 로그인시 유저 정보 조회 후 setLikedAttraction(data.favoriteAttractions)
  setLikedAttraction: (fetchedAttractions) =>
    set(
      () => ({
        likedAttractions: [...fetchedAttractions],
      }),
      false,
      'setLikedAttraction',
    ),
  addLikedAttraction: async (attraction) => {
    try {
      const attractionExists = get().likedAttractions.some(
        (item) => item.attractionId === attraction.attractionId,
      )
      if (attractionExists) {
        return
      }

      const response = await fetchAddLikes(attraction.attractionId)

      if (response) {
        set(
          (state) => ({
            likedAttractions: [...state.likedAttractions, attraction],
          }),
          false,
          'addLikedAttraction',
        )
      }
    } catch (error) {
      console.error(error)
    }
  },
  deleteLikedAttraction: async (attractionId) => {
    try {
      const response = await fetchDeleteLikes(attractionId)
      if (response) {
        set(
          (state) => ({
            likedAttractions: state.likedAttractions.filter(
              (attraction) => attraction.attractionId !== attractionId,
            ),
          }),
          false,
          'deleteLikedAttraction',
        )
      }
    } catch (error) {
      console.error(error)
    }
  },
})

export const useStore = create(persist(devtools(store), { name: 'store' }))
