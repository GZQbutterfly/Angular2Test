import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[tree-view]',
    templateUrl: 'src/app/tree/treeview.component.html'
})
export class TreeViewComponent implements OnInit {
    @Input() directories: any;

    constructor() { }

    ngOnInit() { }

}
