import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-command-info',
  templateUrl: './command-info.component.html',
  styleUrls: ['./command-info.component.scss']
})
export class CommandInfoComponent implements OnInit {

  @Input() commands;

  constructor() { }

  ngOnInit() {
  }

}
