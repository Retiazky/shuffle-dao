type RectangleParams = {
  x?: number,
  y?: number,
  width?: number,
  height?: number,
  fill?: string,
}

function clamp(num: number, min: number, max: number) {
  return Math.max(min, Math.min(num, max));
}

export class VersatilePoint {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
  ) {}

  bottom() {
    return new VersatilePoint(this.x, clamp(this.y + this.height, 0, this.height), this.width, this.height)
  }

  right() {
    return new VersatilePoint(clamp(this.x + this.width, 0, this.width), this.y, this.width, this.height)
  }

  center() {
    return new VersatilePoint(this.width / 2, this.height / 2, this.width, this.height)
  }

  centerY() {
    return new VersatilePoint(this.x, this.height / 2, this.width, this.height)
  }

  centerX() {
    return new VersatilePoint(this.width / 2, this.y, this.width, this.height)
  }

  gap(gapX: number, gapY: number) {
    return new VersatilePoint(this.x + gapX, this.y + gapY, this.width, this.height) 
  }

  gapY(gap: number) {
    return new VersatilePoint(this.x, this.y + gap, this.width, this.height)
  }
  
  gapX(gap: number) {
    return new VersatilePoint(this.x + gap, this.y, this.width, this.height)
  }

  do<T>(cb: (params: { x: number, y: number }) => T) {
    return cb({ x: this.x, y: this.y }) as T
  }
} 

export function rect(ctx: CanvasRenderingContext2D, params: RectangleParams) {
  const coercedParams: Required<RectangleParams> = {
    x: params?.x || 0,
    y: params?.y || 0,
    width: params?.width || 10,
    height: params?.height || 10,
    fill: params?.fill || '#000',
  }

  ctx.fillStyle = coercedParams.fill
  ctx.fillRect(coercedParams.x, coercedParams.y, coercedParams.width, coercedParams.height) 

  return new VersatilePoint(coercedParams.x, coercedParams.y, coercedParams.width, coercedParams.height)
}