import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Contact } from '../model/contact.interface';
import { ActivatedRoute } from '@angular/router';
import {ContactService} from '../service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnChanges {

  favContacts: Contact[];
  otherContacts: Contact[];

  constructor(private route: ActivatedRoute, private contactService: ContactService) {}

  ngOnInit() {
    const allContacts = this.route.snapshot.data.contacts as Array<Contact>;
    if (allContacts) {
      this.favContacts = allContacts.filter(c => c.isFavorite).sort((c1, c2) => c1.name > c2.name ? 1 : -1);
      this.otherContacts = allContacts.filter(c => !c.isFavorite).sort((c1, c2) => c1.name > c2.name ? 1 : -1);
    }
    this.contactService.eventEmitter.subscribe((updated: Contact) => {
      console.log(updated);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('something changed');
  }

}
