import { VersatilePoint, useRect } from './rect'
import './style.css'
import { createRangeInput } from './util'

const searchParams = new URLSearchParams(window.location.search)
const seed = BigInt(searchParams.get('hash') ?? '0x' + crypto.randomUUID().toString().replaceAll('-', ''))

const deriveFromSeed = (mod: number) => Number(seed % BigInt(mod))

const WIDTH = 400
const HEIGHT = 400

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
const root = new VersatilePoint(0, 0, WIDTH, HEIGHT)
const rect = useRect(ctx)

const inputs = {
  backgroundHue: () => deriveFromSeed(360), // createRangeInput('Background hue', 0, 360),
  headWidth: () => deriveFromSeed(220 - 160) + 160, // createRangeInput('Head width', 160, 220),
  headTop: () => deriveFromSeed(240 - 100) + 100,// createRangeInput('Head top', 100, 240),
  eyebrowsHue: () => deriveFromSeed(360), // createRangeInput('Eyebrows hue', 0, 360),
  legsGap: () => deriveFromSeed(30 - 5) + 5, // createRangeInput('Legs gap', 5, 30),
  eyebrowLeftHeight: () => deriveFromSeed(3) * 20, // createRangeInput('Left eyebrow height', 0, 40, 20),
  eyebrowRightHeight: () => deriveFromSeed(3) * 20, // createRangeInput('Right eyebrow height', 0, 40, 20),
  pupilsHorizontalOffset: () => deriveFromSeed(3) * 20, // createRangeInput('Horizontal pupils offset', 0, 40, 20),
  hasCheckers: () => 1, // createRangeInput('Has checkers', 0, 1),
  hasCrown: () => 1, // createRangeInput('Has crown', 0, 1),
  hasSunglasses: () => 1, // createRangeInput('Has sunglasses', 0, 1),
  hasBezier: () => 1, // createRangeInput('Has bezier', 0, 1),
}

;(function render() {
  const ROOT = {
    checkerSize: 40,
    backgroundColor: `hsl(${inputs.backgroundHue()}, 20%, 80%)`,
    bezier: inputs.hasBezier(),
  }

  const HEAD = {
    width: inputs.headWidth(),
    height: 130,
    top: inputs.headTop(),
    right: 100,
    color: `hsl(${inputs.backgroundHue()}, 50%, 45%)`,
    crown: !!inputs.hasCrown(),
    sunglasses: !!inputs.hasSunglasses(),
  }
  
  const EYE = {
    width: 60,
    height: 60,
    gap: 10,
    eyebrowLeftHeight: inputs.eyebrowLeftHeight(),
    eyebrowRightHeight: inputs.eyebrowRightHeight(),
    eyebrowColor: `hsl(${(inputs.backgroundHue() + 180) % 360}, 60%, 27%)`,
  }
  
  const PUPIL = {
    leftWidth: EYE.height / 3,
    leftHeight: EYE.height,
    rightWidth: EYE.height / 3,
    rightHeight: EYE.height,
    horizontalOffset: inputs.pupilsHorizontalOffset(),
  }
  
  const LEGS = {
    gap: inputs.legsGap(),
    width: 3,
    bootsColor: `rgba(0, 0, 0, 1)`,
  }

  ctx.clearRect(root.x, root.y, root.width, root.height)
  ctx.fillStyle = ROOT.backgroundColor
  ctx.fillRect(root.x, root.y, root.width, root.height)

  if (inputs.hasCheckers()) {
    for (let y = 0; y < root.height * 3; y += ROOT.checkerSize) {
      for (let x = 0; x < root.width * 3; x += ROOT.checkerSize) {
        if (y % (ROOT.checkerSize * 2) == 0 && x % (ROOT.checkerSize * 2) == 0) {
          rect(x, y, ROOT.checkerSize, ROOT.checkerSize, 'rgba(0, 0, 0, 0.15)')
          rect(x + ROOT.checkerSize, y + ROOT.checkerSize, ROOT.checkerSize, ROOT.checkerSize, 'rgba(0, 0, 0, 0.15)')
        }
      }
    }
  }
  
  if (ROOT.bezier) {
    for (let n = 0; n < 30; n += 1) {
      let c = (n * 70) - 200

      ;[290, 200, 170, 60].forEach((clr, idx) => {
        ctx.strokeStyle = `hsl(${clr}, 90%, 48%)`
        ctx.lineWidth = 10
        ctx.beginPath()
        ctx.moveTo(-300, c + (idx * 30))
        ctx.bezierCurveTo(200, 50 + c * 1,200, 500 + c * 2, root.right().x + 20, c + (idx * 30))
        ctx.stroke()
      })
    }
  }
  
  const head = root.centerX().gap(-HEAD.width / 2, HEAD.top).do(from => {
    if (HEAD.crown) {
      ctx.font = '80px Verdana'
      ctx.fillStyle = 'black'
      ctx.fillText('👑', from.x, from.y)
    }

    return rect(from.x, from.y, HEAD.width, HEAD.height, HEAD.color)
  })
  
  const eye = head.gapY(30).centerX().gapX(head.x).do(p => {
    const leftEye = rect(p.x - 5, p.y, -EYE.width, EYE.height, '#FFF')
    
    leftEye.bottom().gap(PUPIL.horizontalOffset  - PUPIL.leftWidth * 2, leftEye.y).do(p => {
      rect(p.x, p.y, -PUPIL.leftWidth, -PUPIL.leftHeight, '#000')
    })
    
    const leftEyebrow = rect(leftEye.x, leftEye.y, leftEye.width, EYE.eyebrowLeftHeight, EYE.eyebrowColor)
    
    const rightEye = rect(p.x + 5, p.y, EYE.width, EYE.height, '#FFF')
    
    rightEye.bottom().gap(PUPIL.horizontalOffset, rightEye.y).do(p => {
      rect(p.x, p.y, PUPIL.rightWidth, -PUPIL.rightHeight, '#000')
    })
    
    const rightEyebrow = rect(rightEye.x, rightEye.y, rightEye.width, EYE.eyebrowRightHeight, EYE.eyebrowColor)

    if (HEAD.sunglasses) {
      const glasses = '🕶️'
      ctx.font = '150px Verdana'
      const sunglassesWidth = ctx.measureText(glasses).width
      ctx.fillText(glasses, p.x - sunglassesWidth / 2, leftEye.y + leftEye.height * 1.5)
    }
  })
  
  const mouth = head.bottom().centerX().gap(head.x, head.y).gapY(-30).do(l => {
    ctx.strokeStyle = `rgba(0, 0, 0, 0.4)`
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(l.x - 50, l.y + 5)
    ctx.bezierCurveTo(l.x + 20, l.y + 10, l.x + 40, l.y + 30, l.x + 50, l.y)
    ctx.stroke()
  })
  
  const legs = head.centerX().gap(head.x, head.height).do(s => {
    rect(s.x - LEGS.gap - LEGS.width, s.y, LEGS.width, 1000, '#555')
    rect(s.x + LEGS.gap, s.y, LEGS.width, 1000, '#555')
  })
  
  const boots = root.bottom().centerX().do(p => {
    p.gapX(LEGS.gap).do(p => rect(p.x, p.y, 50, -20, LEGS.bootsColor))
    p.gapX(-LEGS.gap).do(p => rect(p.x, p.y, -50, -20, LEGS.bootsColor))
  })
  
  requestAnimationFrame(render)
})()


document.body.appendChild(document.createElement('br'))
document.body.appendChild(canvas)