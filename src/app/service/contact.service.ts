import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/contact.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactService {

  // url = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';
  url_fake = 'http://localhost:3000/contacts';

  private corsHeaders: HttpHeaders;
  @Output()
  eventEmitter = new EventEmitter();

  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
  }

  getContacts(): Observable<Contact[]> {
    return this.http
      .get(this.url_fake, { headers: this.corsHeaders })
      .pipe(map((response: Contact[]) => response));
  }

  getContact(id: string): Observable<Contact> {
    return this.http
      .get(`${this.url_fake}/${id}`)
      .pipe(map((response: Contact) => response));
  }

  toggleFavorite(id: number, contactToUpdate: Contact) {
    const contact = Object.assign({}, { ...contactToUpdate, isFavorite: !contactToUpdate.isFavorite });
    this.http.put(`http://localhost:3000/contact/${id}`, contact, {
      headers: this.corsHeaders,
    });
    this.eventEmitter.emit(contact);
  }

}
