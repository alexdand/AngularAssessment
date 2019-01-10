import {Component, EventEmitter, OnInit} from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {Contact} from '../model/contact.interface';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;
  favoriteToggle = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.contact = this.route.snapshot.data.contact as Contact;
  }

  toggleFavorite() {
    this.favoriteToggle.emit(!this.contact.isFavorite);
  }

}
