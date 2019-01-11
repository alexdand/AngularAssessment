import {Component, OnInit} from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {Contact} from '../model/contact.interface';
import {ContactService} from '../service/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService) {}

  ngOnInit() {
    this.contact = this.route.snapshot.data.contact as Contact;
  }

  toggleFavorite(element: any): void {
    element.classList.toggle('favorite');
    element.classList.toggle('not-favorite');
    this.contactService.toggleFavorite(this.contact.id, this.contact);
  }

}
