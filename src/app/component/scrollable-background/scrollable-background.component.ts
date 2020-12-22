import {Component, Input} from '@angular/core';
import {Vector} from '../../model/vector';

@Component({
  selector: 'app-scrollable-background',
  templateUrl: './scrollable-background.component.html',
  styleUrls: ['./scrollable-background.component.scss']
})
export class ScrollableBackgroundComponent {

  public style;

  private offsetValue: Vector = new Vector(0, 0);
  private width = 250;
  private height = 250;

  constructor() {
    this.updateStyle();
  }

  @Input() set offset(input: Vector) {
    this.offsetValue = input.invert();
    this.updateStyle();
  }

  private updateStyle() {
    this.style = {
      width: this.width + 'px',
      height: this.height + 'px',
      'background-position-x': this.offsetValue.x + 'px',
      'background-position-y': this.offsetValue.y + 'px'
    };
  }

}
