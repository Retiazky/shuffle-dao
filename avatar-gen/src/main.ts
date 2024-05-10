import { rect } from './rect'
import './style.css'

const WIDTH = 300
const HEIGHT = 300

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

const body = {
  head: [
    (ctx: CanvasRenderingContext2D, params: {}) => {
      // Head
      ctx.fillStyle = '#DDD'
      ctx.fillRect((WIDTH / 2) - (HEAD.width / 2), HEAD.top, HEAD.width, HEAD.height)
    }
  ],
  eyes: [
    (ctx: CanvasRenderingContext2D, params: { eyebrowColor: string }) => {
      // Eyes
      ctx.fillStyle = '#FFF'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height)
  
      // Eyebrows
      ctx.fillStyle = params.eyebrowColor
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height * (2 / 3))
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height * (2 / 3))
      
      // Pupils
      ctx.fillStyle = '#000'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2) - PUPIL.width, HEAD.top + 30 + EYE.height * (2 / 3), -PUPIL.width, PUPIL.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2) + PUPIL.width, HEAD.top + 30 + EYE.height * (2 / 3), PUPIL.width, PUPIL.height)
    },
    (ctx: CanvasRenderingContext2D, params: { eyebrowColor: string }) => {
      // Eyes
      ctx.fillStyle = '#FFF'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height)
  
      // Eyebrows
      ctx.fillStyle = params.eyebrowColor
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height * (1 / 3))
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height * (1 / 3))
      
      // Pupils
      ctx.fillStyle = '#000'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2) - PUPIL.width, HEAD.top + 30 + EYE.height * (2 / 3), -PUPIL.width, -PUPIL.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2) + PUPIL.width, HEAD.top + 30 + EYE.height * (2 / 3), PUPIL.width, -PUPIL.height)
    },
    (ctx: CanvasRenderingContext2D, params: { eyebrowColor: string }) => {
      // Eyes
      ctx.fillStyle = '#FFF'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height)
  
      // Eyebrows
      ctx.fillStyle = params.eyebrowColor
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height * (2 / 3))
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height * (1 / 3))
      
      // Pupils
      ctx.fillStyle = '#000'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30 + EYE.height * (2 / 3), -PUPIL.width, PUPIL.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2) + (PUPIL.width * 2), HEAD.top + 30 + EYE.height, PUPIL.width, -PUPIL.height * 2)
    },
    (ctx: CanvasRenderingContext2D, params: { eyebrowColor: string }) => {
      // Eyes
      ctx.fillStyle = '#FFF'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height)
  
      // Eyebrows
      ctx.fillStyle = params.eyebrowColor
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height * (2 / 3))
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height * (1 / 3))
      
      // Pupils
      ctx.fillStyle = '#000'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30 + EYE.height * (2 / 3), -PUPIL.width, PUPIL.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2) + (PUPIL.width * 2), HEAD.top + 30 + EYE.height, PUPIL.width, -PUPIL.height * 2)
    },
    (ctx: CanvasRenderingContext2D, params: { eyebrowColor: string }) => {
      // Eyes
      ctx.fillStyle = '#FFF'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height)
      
      // Eyebrows
      ctx.fillStyle = params.eyebrowColor
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height * (1 / 3))
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height * (2 / 3))
      
      // Pupils
      ctx.fillStyle = '#000'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2) - (PUPIL.width * 2), HEAD.top + 30 + EYE.height, -PUPIL.width, -PUPIL.height * 2)
      ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30 + EYE.height * (2 / 3), PUPIL.width, PUPIL.height)
    },
  ],
  mouth: [
    (ctx: CanvasRenderingContext2D, params: {}) => {
      // Mouth added
      ctx.fillStyle = '#AAA'
      ctx.fillRect((WIDTH / 2) - (EYE.gap / 2) - EYE.width, HEAD.top + 30 + EYE.height + 10, EYE.width * 2 + EYE.gap, 3)
    }
  ],
  legs: [
    (ctx: CanvasRenderingContext2D, params: {}) => {
      // Legs
      ctx.fillStyle = '#222'
      ctx.fillRect(WIDTH / 2 + 15, HEAD.height + HEAD.top, -3, 1000)
      ctx.fillRect(WIDTH / 2 - 15, HEAD.height + HEAD.top, 3, 1000)
    }
  ],
}

const point = rect(ctx, { x: 0, y: 0, width: 10, height: 10, fill: '#FFF' })

point.center().do((x, y) => {
  console.log(x, y)
})

body.head[0](ctx, {})
body.eyes[4](ctx, { eyebrowColor: '#BBB' })
body.mouth[0](ctx, {})
body.legs[0](ctx, {})

document.body.appendChild(canvas)