import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContactService } from './contact.service';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact.interface';

@Injectable()
export class ContactResolver implements Resolve<Observable<Contact[]>> {

    constructor(private contactService: ContactService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.contactService.getContacts();
    }

}
