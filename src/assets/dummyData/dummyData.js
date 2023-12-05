const navCategories = [
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    newCategory: 'false',
  },
  {
    categoryCode: '2',
    title: '항공권',
    categoryName: 'flights',
    newCategory: 'false',
  },
  {
    categoryCode: '3',
    title: '투어&티켓',
    categoryName: 'tour',
    newCategory: 'false',
  },
  {
    categoryCode: '4',
    title: '항공 + 호텔',
    categoryName: 'packages',
    newCategory: 'true',
  },
  {
    categoryCode: '5',
    title: '기차표',
    categoryName: 'trains',
    newCategory: 'false',
  },
  {
    categoryCode: '6',
    title: '렌터카-공항픽업',
    categoryName: 'airport-transfer',
    newCategory: 'false',
  },
  {
    categoryCode: '7',
    title: '트립 가이드',
    categoryName: 'searchList',
    newCategory: 'false',
  },
  {
    categoryCode: '8',
    title: '트립닷컴 리워드',
    categoryName: 'customer/loyalty',
    newCategory: 'false',
  },
  {
    categoryCode: '9',
    title: '프로모션',
    categoryName: 'sale/deals',
    newCategory: 'false',
  },
]

const hotTripLocation = [
  {
    id: 1,
    locale: '서울',
    detailLocale: '대한민국',
  },
  {
    id: 2,
    locale: '제주',
    detailLocale: '제주특별자치도, 대한민국',
  },
  {
    id: 3,
    locale: '오사카',
    detailLocale: '오사카 부, 일본',
  },
  {
    id: 4,
    locale: '도쿄',
    detailLocale: '일본',
  },
  {
    id: 5,
    locale: '부산',
    detailLocale: '대한민국',
  },
]
export default { navCategories, hotTripLocation }
