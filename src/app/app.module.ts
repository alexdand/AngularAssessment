import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-list/contact-item/contact-item.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactService } from './service/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { ContactResolver } from './service/contact.resolver';
import { ContactDetailResolver } from './service/contact-detail.resolver';
import { ContactInfoComponent } from './contact-list/contact-item/contact-info/contact-info.component';

const appRoutes: Routes = [
  { path: 'contacts', component: ContactListComponent, resolve: { contacts: ContactResolver } },
  { path: 'contacts/:id', component: ContactDetailComponent, resolve: { contact: ContactDetailResolver } },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactDetailComponent,
    PageNotFoundComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ContactService,
    ContactResolver,
    ContactDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
