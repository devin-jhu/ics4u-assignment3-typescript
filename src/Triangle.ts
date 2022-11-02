/**
 * the triangle program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-01
 */

class Triangle {
  private readonly side1: number
  private readonly side2: number
  private readonly side3: number

  constructor(length1: number, length2: number, length3: number) {
    this.side1 = length1
    this.side2 = length2
    this.side3 = length3
  }

  // checks if triangle is valid
  isValid(): boolean {
    if (
      this.side1 + this.side2 > this.side3 &&
      this.side1 + this.side3 > this.side2 &&
      this.side2 + this.side3 > this.side1
    ) {
      return true
    }
    return false
  }

  // the getter for side 1
  getSide1(): number {
    return this.side1
  }

  // the getter for side 2
  getSide2(): number {
    return this.side2
  }

  // the getter for side 3
  getSide3(): number {
    return this.side3
  }

  // private perimeter method
  private getPerimeter(): number {
    return this.side1 + this.side2 + this.side3
  }

  // the getter for semiP
  getSemiPerimeter(): number {
    return this.getPerimeter() / 2
  }

  // the getter for area
  getArea(): number {
    const semiP = this.getSemiPerimeter()
    return Math.sqrt(
      semiP * (semiP - this.side1) * (semiP - this.side2) * (semiP - this.side3)
    )
  }

  // finds which triangle it is
  getTriangleType(): string {
    let triangleType
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      triangleType = 'Equilateral'
    } else if (
      this.side1 ** 2 + this.side2 ** 2 === this.side3 ** 2 ||
      this.side3 ** 2 + this.side1 ** 2 === this.side2 ** 2 ||
      this.side2 ** 2 + this.side3 ** 2 === this.side1 ** 2
    ) {
      triangleType = 'Right Angle'
    } else if (
      this.side1 === this.side2 &&
      this.side2 === this.side3 &&
      this.side1 === this.side3
    ) {
      triangleType = 'Isoceles'
    } else {
      triangleType = 'Scalene'
    }
    return triangleType
  }

  // the getter for angle A
  getAngle(side: number): number {
    let angle: number
    const side1Squared = Math.pow(this.side1, 2)
    const side2Squared = Math.pow(this.side2, 2)
    const side3Squared = Math.pow(this.side3, 2)
    if (side === 1) {
      angle = Math.acos(
        (side2Squared + side3Squared - side1Squared) /
          (2 * this.side2 * this.side3)
      )
    } else if (side === 2) {
      angle = Math.acos(
        (side1Squared + side3Squared - side2Squared) /
          (2 * this.side1 * this.side3)
      )
    } else {
      angle = Math.acos(
        (side1Squared + side2Squared - side3Squared) /
          (2 * this.side1 * this.side2)
      )
    }
    return angle
  }

  // the getter for the Height
  getHeight(side: number): number {
    let height: number
    const area: number = this.getArea()
    if (side === 1) {
      height = (2 * area) / this.side1
    } else if (side === 2) {
      height = (2 * area) / this.side2
    } else {
      height = (2 * area) / this.side3
    }
    return height
  }

  // the getter for the inner circle radius
  getinnerCircleRadius(): number {
    return this.getArea() / this.getSemiPerimeter()
  }

  // the getter for the circumradius
  getcircumRadius(): number {
    return (this.side1 * this.side2 * this.side3) / (4 * this.getArea())
  }
}

export = Triangle
