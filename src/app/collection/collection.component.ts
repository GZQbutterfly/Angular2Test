import {Component, OnInit} from '@angular/core';
import {ContactService} from '../shared/contact.service';
import './collection.component.less';

@Component({
    selector: 'call-record',
    templateUrl: 'src/app/collection/collection.component.html',
    //styleUrls: ['app/collection/collection.component.css']
})
export class CollectionComponent implements OnInit {
    collections: any = [];
    contacts: any = {};
    coll_length: Number = 0;

    constructor(private _constactService: ContactService) { }

    getCollectionContact() {
        let ss_contacts = sessionStorage.getItem('contacts');
        if (ss_contacts) {
            this.contacts = JSON.parse(ss_contacts);
            let len = this.contacts.length;
            for (let i = 0; i < len; i++) {
                if (this.contacts[i].collection == 1) {
                    this.collections.push(this.contacts[i]);
                }
            }
            this.coll_length = this.collections.length;
        } else {
            this.coll_length = 0;
            this._constactService.getCollections().subscribe((data: any) => {
                this.collections = data;
            })
        }
    }

    ngOnInit() {
        this.getCollectionContact();
    }

    collectTheContact(detail: any) {
        detail.collection = detail.collection == 0 ?  1 :  0;
        let ss_contacts = sessionStorage.getItem('contacts');
        this.contacts = JSON.parse(ss_contacts);
        this.contacts[detail.id - 1].collection = detail.collection;
        sessionStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
}
