import assemblingFlowers from './images/home-gallery/assemblingFlowers.jpg'
import brightFlowersHome from './images/home-gallery/brightFlowersHome.jpg'
import cityHallWedding from './images/home-gallery/CityHallWedding.jpg'
import meganWeddingArch from './images/home-gallery/MeganWeddingArch.jpg'
import dahlias from './images/home-gallery/dahlia.jpg'
import floralArrangement from './images/home-gallery/FloralArrangement.png'
import meganAndHusband from './images/home-gallery/MeganAndHusband.png'
import eventPhoto from './images/home-gallery/EventPhoto.png'
import homepage8191 from './images/home-gallery/homepage8-19-1.jpg'
import homepage8193 from './images/home-gallery/homepage8-19-3.jpg'
import homepage8194 from './images/home-gallery/homepage8-19-4.png'
import homepage8195 from './images/home-gallery/homepage8-19-5.png'
import homepage8196 from './images/home-gallery/homepage8-19-6.png'
import homepage8197 from './images/home-gallery/homepage8-19-7.png'



export const photos = [
  { src:  `${homepage8197}`, width: 1700, height: 1100 },
  { src: `${cityHallWedding}`, width: 1100, height:1300 },
  { src:  `${dahlias}`, width: 820, height: 1000 },
  { src:  `${homepage8195}`, width: 800, height: 1200 },
  { src:  `${homepage8191}`, width: 950, height: 1400 },
  { src: `${eventPhoto}`, width: 1400, height: 1000 },
  { src: `${meganWeddingArch}`, width: 950, height: 1400 },
  { src: `${homepage8194}`, width: 2100, height: 1400 },
  { src: `${homepage8193}`, width: 4500, height: 7000 },
  { src:  `${homepage8196}`, width: 1800, height: 1200 },
  { src: `${assemblingFlowers}`, width: 4900, height: 3300 },
  { src:  `${meganAndHusband}`, width: 700, height: 1000 },
  { src: `${brightFlowersHome}`, width: 3400, height: 5000 },
  { src:  `${floralArrangement}`, width: 1400, height: 1000 },
];

export const setting = {
  width: '600px',
  height: ['600px', '300px'],
  layout: [1, 2],
  photos: [
    { source: `${meganWeddingArch}` },
    { source: `${assemblingFlowers}` },
    { source:  `${assemblingFlowers}`},
  ],
  showNumOfRemainingPhotos: false
};

