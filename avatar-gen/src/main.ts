import { VersatilePoint, useRect } from './rect'
import './style.css'
import { createRangeInput } from './util'

const WIDTH = 400
const HEIGHT = 400

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.border = '1px solid black'

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
const root = new VersatilePoint(0, 0, WIDTH, HEIGHT)
const rect = useRect(ctx)

const inputs = {
  headWidth: createRangeInput('Head width', 160, 300),
  headTop: createRangeInput('Head top', 0, 250),
  headHue: createRangeInput('Head hue', 0, 360),
  eyebrowsHue: createRangeInput('Eyebrows hue', 0, 360),
  legsGap: createRangeInput('Legs gap', 5, 30),
  pupilLeftHeight: createRangeInput('Left pupil height', 20, 60, 20),
  pupilRightHeight: createRangeInput('Right pupil height', 20, 60, 20),
  eyebrowLeftHeight: createRangeInput('Left eyebrow height', 0, 40, 20),
  eyebrowRightHeight: createRangeInput('Right eyebrow height', 0, 40, 20),
  bootsHue: createRangeInput('Boots hue', 0, 360),
  hasCrown: createRangeInput('Has crown', 0, 1),
  hasSunglasses: createRangeInput('Has sunglasses', 0, 1)
}

;(function render() {
  ctx.clearRect(root.x, root.y, root.width, root.height)

  const HEAD = {
    width: inputs.headWidth(),
    height: 130,
    top: inputs.headTop(),
    right: 100,
    color: `hsl(${inputs.headHue()}, 50%, 45%)`,
    crown: !!inputs.hasCrown(),
    sunglasses: !!inputs.hasSunglasses(),
  }
  
  const EYE = {
    width: 60,
    height: 60,
    gap: 10,
    eyebrowLeftHeight: inputs.eyebrowLeftHeight(),
    eyebrowRightHeight: inputs.eyebrowRightHeight(),
    eyebrowColor: `hsl(${inputs.eyebrowsHue()}, 80%, 30%)`,
  }
  
  const PUPIL = {
    leftWidth: EYE.width / 3,
    leftHeight: inputs.pupilLeftHeight(),
    rightWidth: EYE.width / 3,
    rightHeight: inputs.pupilRightHeight(),
  }
  
  const LEGS = {
    gap: inputs.legsGap(),
    width: 3,
    bootsColor: `hsl(${inputs.bootsHue()}, 80%, 20%)`,
  }
  
  const heads = [
    (params: {}) => {
      return root.centerX().gap(-HEAD.width / 2, HEAD.top).do(from => {
        if (HEAD.crown) {
          ctx.font = '60px Verdana'
          ctx.fillText('👑', from.x, from.y)
        }

        return rect(from.x, from.y, HEAD.width, HEAD.height, HEAD.color)
      })
    }
  ]
  
  const selectedHead = heads[0]({})
  
  const eyes = [
    (params: {}) => (
      selectedHead.gapY(30).centerX().gapX(selectedHead.x).do(p => {
        const leftEye = rect(p.x - 5, p.y, -EYE.width, EYE.height, '#FFF')
        
        leftEye.bottom().gap(-PUPIL.leftWidth, leftEye.y).do(p => {
          rect(p.x, p.y, -PUPIL.leftWidth, -PUPIL.leftHeight, '#000')
        })
        
        const leftEyebrow = rect(leftEye.x, leftEye.y, leftEye.width, EYE.eyebrowLeftHeight, EYE.eyebrowColor)
        
        const rightEye = rect(p.x + 5, p.y, EYE.width, EYE.height, '#FFF')
        
        rightEye.bottom().gap(PUPIL.rightWidth, rightEye.y).do(p => {
          rect(p.x, p.y, PUPIL.rightWidth, -PUPIL.rightHeight, '#000')
        })
        
        const rightEyebrow = rect(rightEye.x, rightEye.y, rightEye.width, EYE.eyebrowRightHeight, EYE.eyebrowColor)

        if (HEAD.sunglasses) {
          const glasses = '👓'
          ctx.font = '150px Verdana'
          const sunglassesWidth = ctx.measureText(glasses).width
          ctx.fillText(glasses, p.x - sunglassesWidth / 2, leftEye.y + leftEye.height * 1.5)
        }
      })
    ),
  ]
  
  const selectedEye = eyes[0]({})
  
  const mouth = [
    (params: {}) => {
      selectedHead.bottom().centerX().gap(selectedHead.x, selectedHead.y).gapY(-30).do(l => {
        rect(l.x, l.y, 60, 3, 'rgba(0, 0, 0, 0.4)')
        rect(l.x, l.y, -60, 3, 'rgba(0, 0, 0, 0.4)')
      })
    }
  ]
  
  const selectedMouth = mouth[0]({})
  
  const legs = [
    (params: {}) => {
      selectedHead.centerX().gap(selectedHead.x, selectedHead.height).do(s => {
        rect(s.x - LEGS.gap - LEGS.width, s.y, LEGS.width, 1000, '#555')
        rect(s.x + LEGS.gap, s.y, LEGS.width, 1000, '#555')
      })
    }
  ]
  
  legs[0]({})
  
  const boots = [
    (params: {}) => {
      root.bottom().centerX().do(p => {
        p.gapX(LEGS.gap).do(p => rect(p.x, p.y, 50, -20, LEGS.bootsColor))
        p.gapX(-LEGS.gap).do(p => rect(p.x, p.y, -50, -20, LEGS.bootsColor))
      })
    }
  ]
  
  boots[0]({})
  
  requestAnimationFrame(render)
})()


document.body.appendChild(document.createElement('br'))
document.body.appendChild(canvas)