import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-application',
  template: `<router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
