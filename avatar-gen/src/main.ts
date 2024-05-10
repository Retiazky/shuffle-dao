import { VersatilePoint, rect } from './rect'
import './style.css'

const WIDTH = 400
const HEIGHT = 400

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.border = '1px solid black'

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

const HEAD = {
  width: 200,
  height: 130,
  top: 80,
}

const EYE = {
  width: 60,
  height: 60,
  gap: 10,
}

const PUPIL = {
  width: EYE.width / 3,
  height: EYE.height / 3,
}

const root = new VersatilePoint(0, 0, WIDTH, HEIGHT)

const heads = [
  (ctx: CanvasRenderingContext2D, params: {}) => (
    root.gap(80, 60).do(from => (
      root.right().gapX(-80).gapY(HEAD.height).do(to => (
        rect(ctx, { fill: '#DDD', x: from.x, y: from.y, width: to.x - from.x, height: HEAD.height })
      ))
    ))
  )
]

const selectedHead = heads[0](ctx, {})

const eyes = [
  (ctx: CanvasRenderingContext2D, params: { eyebrowColor: string }) => (
    selectedHead.gapY(30).centerX().do(p => {
      const leftEye = rect(ctx, { fill: '#FFF', x: selectedHead.x + p.x - 5, y: p.y, width: -EYE.width, height: EYE.height,})
      const leftEyebrow = rect(ctx, { fill: '#BBB', x: leftEye.x, y: leftEye.y, width: leftEye.width, height: leftEye.height * (2 / 3) })

      leftEyebrow.bottom().gap(-PUPIL.width, leftEyebrow.y).do(p => {
        rect(ctx, { fill: '#000', x: p.x, y: p.y, width: -PUPIL.width, height: PUPIL.height })
      })

      const rightEye = rect(ctx, { fill: '#FFF', x: selectedHead.x + p.x + 5, y: p.y, width: EYE.width, height: EYE.height })
      const rightEyebrow = rect(ctx, { fill: '#BBB', x: rightEye.x, y: rightEye.y, width: rightEye.width, height: rightEye.height * (2 / 3) })

      rightEyebrow.bottom().gap(PUPIL.width, rightEyebrow.y).do(p => {
        rect(ctx, { fill: '#000', x: p.x, y: p.y, width: PUPIL.width, height: PUPIL.height })
      })
    })
  ),
]

const selectedEye = eyes[0](ctx, { eyebrowColor: '#BBB' })

const mouth = [
  (ctx: CanvasRenderingContext2D, params: {}) => {
    selectedHead.bottom().centerX().gap(selectedHead.x, selectedHead.y).gapY(-30).do(l => {
      rect(ctx, { fill: '#000', x: l.x, y: l.y, width: 60, height: 3 })
      rect(ctx, { fill: '#000', x: l.x, y: l.y, width: -60, height: 3,})
    })
  }
]

const selectedMouth = mouth[0](ctx, {})

const legs = [
  (ctx: CanvasRenderingContext2D, params: {}) => {
    // Legs
    ctx.fillStyle = '#222'
    ctx.fillRect(WIDTH / 2 + 15, HEAD.height + HEAD.top, -3, 1000)
    ctx.fillRect(WIDTH / 2 - 15, HEAD.height + HEAD.top, 3, 1000)
  }
]

const point = rect(ctx, { x: 0, y: 0, width: 10, height: 10, fill: '#FFF' })


document.body.appendChild(canvas)