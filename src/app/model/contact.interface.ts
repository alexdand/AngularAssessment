import {Phone} from './phone.interface';
import {Address} from './address.interface';

export interface Contact {

  name: string;
  id: number;
  companyName: string;
  isFavorite: boolean;
  smallImageURL: string;
  largeImageURL: string;
  emailAddress: string;
  birthdate: string;
  phone: Phone;
  address: Address;

}
