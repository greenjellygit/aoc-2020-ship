export class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public mulByScalar(value: number): Vector {
    return new Vector(this.x * value, this.y * value);
  }

  public add(vector: Vector): Vector {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  public normalize() {
    const length = Math.sqrt(this.x * this.x + this.y * this.y);
    return new Vector(this.x / length, this.y / length);
  }

  public rotate(angle: number): Vector {
    const cx = 0;
    const cy = 0;
    const x = this.x;
    const y = this.y;
    const radians = (Math.PI / 180) * angle;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return new Vector(Math.round(nx), Math.round(ny));
  }

  public invert(): Vector {
    return new Vector(-this.x, -this.y);
  }

}
