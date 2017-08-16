import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import './item.component.less';
@Component({
    selector: 'list-item',
    templateUrl: 'src/app/list/item.component.html',
    //styleUrls: ['app/list/item.component.css']
})

export class ListItemComponent implements OnInit {
    @Input() contact: any = {};
    @Output() routerNavigate = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {

    }

    goDetail(num: number) {
        this.routerNavigate.emit(num);
    }

}
