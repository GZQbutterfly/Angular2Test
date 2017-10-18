import {Component, OnInit, AfterViewInit, Input} from '@angular/core';


@Component({
    selector: 'dialog-container',
    templateUrl: 'src/app/dialog/dialog.component.html'
})
export class DialogComponent implements OnInit, AfterViewInit {
    @Input() options: {uuid};
    constructor() { }
    // this is OnInit of attr
    ngOnInit() {
      this.options.uuid;
        (<any>window).$('[data-toggle="tooltip"]').tooltip();
    }
    ngAfterViewInit() {
        console.log(this, arguments);
    }
}
