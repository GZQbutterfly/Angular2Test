import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContactService} from '../shared/contact.service';
import './list.component.less';


@Component({
    selector: 'list',
    templateUrl: 'src/app/list/list.component.html'
})
export class ListComponent implements OnInit {
    contacts: {};
    private isAdd: number = 1;

    constructor(private _router: Router,private _contactService: ContactService) {

    }

    ngOnInit() {
        this.getContacts();
    }

    getContacts() {
        let ss_contacts = sessionStorage.getItem('contacts');
        if (!ss_contacts) {
            this._contactService.getContactsData()
            .subscribe((data:any) => {
              this.contacts = data;
              sessionStorage.setItem("contacts",JSON.stringify(data));
            });          
        } else {
            this.contacts = JSON.parse(ss_contacts);
        }
    }

    addContact() {
        this._router.navigate(['edit']);
    }

    routerNavigate(id: number) {
        console.log(this._router);
        this._router.navigate(['/detail', id]);
    }

}
