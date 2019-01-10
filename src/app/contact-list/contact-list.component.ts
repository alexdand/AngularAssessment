import { Component, OnInit } from '@angular/core';
import {Contact} from '../model/contact.interface';
import {ContactService} from '../service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  favContacts: Contact[];
  otherContacts: Contact[];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(contacts => {
        this.otherContacts = contacts
          .filter(c => !c.isFavorite)
          .sort((c1, c2) => c1.name > c2.name ? 1 : -1);
        this.favContacts = contacts
          .filter(c => c.isFavorite)
          .sort((c1, c2) => c1.name > c2.name ? 1 : -1);
      });
  }

}
