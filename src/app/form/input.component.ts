import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import LoggerService from '../shared/logger-service.ts';

@Component({
    selector: 'input-container',
    templateUrl: 'src/app/form/input.component.html',
    providers:[LoggerService]
})
export class InputComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl()
  });
  constructor(private logger:LoggerService) { }
  ngOnInit() {

  }
  clickTo(model, event){
     this.logger.info(this, model, event);
  }
  clickEvent(){
      this.logger.info('点击事件');

  }
  focusEvent(){
      this.logger.info('获取焦点事件');
  }
  changeEvent(){
      this.logger.info('改变事件');
  }
  blurEvent(){
      this.logger.info('失去焦点事件');
  }
}
