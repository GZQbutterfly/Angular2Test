import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'button-container',
    templateUrl: 'src/app/form/button.component.html'
})
export class ButtonComponent implements OnInit {
  message:string='define title';
  constructor() { }
  // this is OnInit of attr
  ngOnInit() {
    (<any>window).$('[data-toggle="tooltip"]').tooltip();
  }
  clickTo(){
     alert('aa');
     console.log(this, arguments);
  }
}
