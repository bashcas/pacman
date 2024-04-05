import Positionable from "../interfaces/Positionable"
import Vector2 from "../interfaces/Vector2"

interface PowerUpProps {
  position: Vector2
  ctx: CanvasRenderingContext2D
}

class PowerUp implements Positionable {
  public position: Vector2
  public radius: number
  private ctx: CanvasRenderingContext2D

  constructor({ position, ctx }: PowerUpProps) {
    this.position = position
    this.radius = 8
    this.ctx = ctx
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = "white"
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    this.ctx.fill()
  }

  render() {
    this.draw()
  }

  getBoundingRect() {
    return {
      x: this.position.x - this.radius,
      y: this.position.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2,
    }
  }
}

export default PowerUp
