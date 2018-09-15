import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldComponent implements OnInit {
  @Input()
  public message: string;

  constructor() { }

  ngOnInit() {
  }

}
