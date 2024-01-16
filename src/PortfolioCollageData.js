import portfolio1 from './images/portfolio/portfolio1.jpg'
import portfolio2 from './images/portfolio/portfolio2.jpg'
import portfolio3 from './images/portfolio/portfolio3.jpg'
import portfolio4 from './images/portfolio/portfolio4.jpg'
import portfolio5 from './images/portfolio/portfolio5.png'
import portfolio6 from './images/portfolio/portfolio6.png'
import portfolio7 from './images/portfolio/portfolio7.png'
import portfolio9 from './images/portfolio/portfolio9.jpg'
import portfolio10 from './images/portfolio/portfolio10.jpg'
import portfolio11 from './images/portfolio/portfolio11.png'
import portfolio12 from './images/portfolio/portfolio12.jpg'
import portfolio13 from './images/portfolio/portfolio13.png'
import portfolio14 from './images/portfolio/portfolio14.png'
import portfolio15 from './images/portfolio/jan24_update1.png'
import portfolio16 from './images/portfolio/jan24_update2.jpg'
import portfolio17 from './images/portfolio/jan24_update3.jpg'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const aprilPhotos = [
    { src: `${portfolio1}`, width: 4600, height: 7000 },
    { src: `${portfolio2}`, width: 5200, height: 3500 },
    { src: `${portfolio3}`, width: 5300, height: 3500 },
    { src: `${portfolio15}`, width: 2000, height: 1300 },
    { src: `${portfolio5}`, width: 1700, height: 1100 },
    { src: `${portfolio16}`, width: 2000, height: 3000 },
    { src: `${portfolio7}`, width: 900, height: 1200 },
    { src: `${portfolio9}`, width: 5400, height: 3600 },
    { src: `${portfolio10}`, width: 2500, height: 3800 },
    { src: `${portfolio11}`, width: 830, height: 1200 },
    { src: `${portfolio12}`, width: 2100, height: 1400 },
    { src: `${portfolio17}`, width: 1600, height: 1200 },
    { src: `${portfolio13}`, width: 800, height: 1250 },
    { src: `${portfolio14}`, width: 800, height: 1200 },
    { src: `${portfolio6}`, width: 850, height: 1280 },
    { src: `${portfolio4}`, width: 3600, height: 5400 },
];

const portfolioPhotos = aprilPhotos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: photo.src,
            width: breakpoint,
            height,
        };
    }),
}));

export default portfolioPhotos;