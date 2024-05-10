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

ctx.fillStyle = '#DDD'
ctx.fillRect((WIDTH / 2) - (HEAD.width / 2), HEAD.top, HEAD.width, HEAD.height)

ctx.fillStyle = '#FFF'
ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height)
ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height)

ctx.fillStyle = '#BBB'
ctx.fillRect((WIDTH / 2) - (EYE.gap / 2), HEAD.top + 30, -EYE.width, EYE.height * (2 / 3))
ctx.fillRect((WIDTH / 2) + (EYE.gap / 2), HEAD.top + 30, EYE.width, EYE.height * (2 / 3))

ctx.fillStyle = '#000'
ctx.fillRect((WIDTH / 2) - (EYE.gap / 2) - PUPIL.width, HEAD.top + 30 + EYE.height * 2 / 3, -PUPIL.width, PUPIL.height)
ctx.fillRect((WIDTH / 2) + (EYE.gap / 2) + PUPIL.width, HEAD.top + 30 + EYE.height * 2 / 3, PUPIL.width, PUPIL.height)

ctx.fillStyle = '#AAA'
ctx.fillRect((WIDTH / 2) - (EYE.gap / 2) - EYE.width, HEAD.top + 30 + EYE.height + 10, EYE.width * 2 + EYE.gap, 3)

ctx.fillRect(WIDTH / 2 + 15, HEAD.height + HEAD.top, -3, 1000)
ctx.fillRect(WIDTH / 2 - 15, HEAD.height + HEAD.top, 3, 1000)

document.body.appendChild(canvas)