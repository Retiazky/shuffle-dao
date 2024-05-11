import { VersatilePoint, useRect } from './rect'
import './style.css'

const WIDTH = 400
const HEIGHT = 400

const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.border = '1px solid black'

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
const rect = useRect(ctx)

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
    root.gap(80, 200).do(from => (
      root.right().gapX(-80).gapY(HEAD.height).do(to => (
        rect(from.x, from.y, to.x - from.x, HEAD.height, '#DDD',)
      ))
    ))
  )
]

const selectedHead = heads[0](ctx, {})

const eyes = [
  (ctx: CanvasRenderingContext2D, params: { eyebrowColor: string }) => (
    selectedHead.gapY(30).centerX().gapX(selectedHead.x).do(p => {
      const leftEye = rect(p.x - 5, p.y, -EYE.width, EYE.height, '#FFF',)
      const leftEyebrow = rect(leftEye.x, leftEye.y, leftEye.width, leftEye.height * (2 / 3), params.eyebrowColor,)

      leftEyebrow.bottom().gap(-PUPIL.width, leftEyebrow.y).do(p => {
        rect(p.x, p.y, -PUPIL.width, PUPIL.height, '#000',)
      })

      const rightEye = rect(p.x + 5, p.y, EYE.width, EYE.height, '#FFF',)
      const rightEyebrow = rect(rightEye.x, rightEye.y, rightEye.width, rightEye.height * (2 / 3), params.eyebrowColor,)

      rightEyebrow.bottom().gap(PUPIL.width, rightEyebrow.y).do(p => {
        rect(p.x, p.y, PUPIL.width, PUPIL.height, '#000',)
      })
    })
  ),
]

const selectedEye = eyes[0](ctx, { eyebrowColor: '#BBB' })

const mouth = [
  (ctx: CanvasRenderingContext2D, params: {}) => {
    selectedHead.bottom().centerX().gap(selectedHead.x, selectedHead.y).gapY(-30).do(l => {
      rect(l.x, l.y, 60, 3, '#000')
      rect(l.x, l.y, -60, 3, '#000')
    })
  }
]

const selectedMouth = mouth[0](ctx, {})

const legs = [
  (ctx: CanvasRenderingContext2D, params: {}) => {
    selectedHead.centerX().gap(selectedHead.x, selectedHead.height).do(s => {
      rect(s.x - 10, s.y, 3, 1000, '#777')
      rect(s.x + 10, s.y, 3, 1000, '#777')
    })
  }
]

legs[0](ctx, {})

const point = rect(0, 0, 10, 10, '#FFF')


document.body.appendChild(canvas)