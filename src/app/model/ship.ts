import {Vector} from './vector';

export class Ship {

  public position: Vector = new Vector(0, 0);
  public waypoint: Vector = new Vector(10, 1);
  private stepIndex = 0;
  public readonly steps = [];

  constructor(input) {
    this.steps = input.split('\n')
      .map(e => ({name: e[0], value: Number(e.substring(1))}));
  }

  public nextStep() {
    if (this.isFinished()) {
      return;
    }

    const step = this.steps.shift();
    if (step.name === 'N') {
      this.moveNorth(step.value);
    } else if (step.name === 'S') {
      this.moveSouth(step.value);
    } else if (step.name === 'E') {
      this.moveEast(step.value);
    } else if (step.name === 'W') {
      this.moveWest(step.value);
    } else if (step.name === 'L') {
      this.turnLeft(step.value);
    } else if (step.name === 'R') {
      this.turnRight(step.value);
    } else if (step.name === 'F') {
      this.moveForward(step.value);
    }
    console.log(`${step.name} ${step.value}` + ', x: ' + this.position.x + ', y:' + this.position.y);
    this.stepIndex++;
  }

  public isFinished() {
    return this.steps.length == 0;
  }

  private moveForward(times) {
    for (let i = 0; i < times; i++) {
      this.position = this.position.add(this.waypoint);
    }
  }

  private moveNorth(step) {
    this.waypoint = this.waypoint.add(new Vector(0, step));
  }

  private moveSouth(step) {
    this.waypoint = this.waypoint.add(new Vector(0, -step));
  }

  private moveEast(step) {
    this.waypoint = this.waypoint.add(new Vector(step, 0));
  }

  private moveWest(step) {
    this.waypoint = this.waypoint.add(new Vector(-step, 0));
  }

  private turnLeft(degrees) {
    this.rotateWaypoint(-degrees);
  }

  private turnRight(degrees) {
    this.rotateWaypoint(degrees);
  }

  private rotateWaypoint(angle: number) {
    this.waypoint = this.waypoint.rotate(angle);
  }

}
