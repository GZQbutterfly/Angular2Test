import {Component, OnInit, Input} from '@angular/core';
import './header.component.less';

@Component({
  selector: 'my-header',
  templateUrl: 'src/app/shared/header.component.html',
  //styleUrls: ['app/shared/header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isShowCreateButton: boolean;

  constructor() {}

  ngOnInit() {

  }

}
