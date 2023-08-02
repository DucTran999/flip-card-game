import img0 from './cardFace/0.png'
import img1 from './cardFace/1.png'
import img2 from './cardFace/2.png'
import img3 from './cardFace/3.png'
import img4 from './cardFace/4.png'
import img5 from './cardFace/5.png'
import img6 from './cardFace/6.png'
import img7 from './cardFace/7.png'
import winGame from './thumbnail/win.png'
import lostGame from './thumbnail/lost.png'

interface Images {
  [key: number | string]: string
}

const IMAGES: Images = {
  0: img0,
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  
  win: winGame,
  lost: lostGame
}

export default IMAGES
