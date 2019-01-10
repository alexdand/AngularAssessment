import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../model/contact.interface';
import {Phone} from '../../model/phone.interface';
import {Address} from '../../model/address.interface';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input()
  contact: Contact;

  constructor() { }

  ngOnInit() {}

  toggleFavorite() {
    this.contact.isFavorite = !this.contact.isFavorite;
  }

}
