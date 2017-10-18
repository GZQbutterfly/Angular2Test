import {Component} from "@angular/core";
import './app.component.less';

@Component({
    selector: "contact-app",
    templateUrl: "src/app/app.component.html"
})
export class AppComponent {
    menus: Object[];
    constructor() {
        this.menus = [
            {id: '1', active: true, label: 'Home', path: ''},
            {id: '2', label: 'Demo', path: '/list'},
            {id: '3', label: 'Form', path: '/forms',
               nodes: [{id: '3-1',pid: '3',label: 'Button',path: '/forms/button'},
                       {id: '3-2',pid: '3',label: 'Text',path: '/forms/text'},
                       {id: '3-3',pid: '3',label: 'Select',path: '/forms/select'},
                     ]
            },
            {id: '4', label: 'Table', path: '/table',
               nodes: [{id: '4-1',pid: '4',label: 'Basic',path: '/table/basic'},
                       {id: '4-2',pid: '4',label: 'Edit',path: '/table/edit'}]
            }
        ]
    }
}
