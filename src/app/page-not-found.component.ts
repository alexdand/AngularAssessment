import { Component } from '@angular/core';

@Component({
    template: `
        <h1>Page not found!</h1>
        <p>Sorry, nothing to see here, you can redirect to the <a routerLink="">Home</a> if you please</p>
    `,
    selector: 'app-page-not-found'
})
export class PageNotFoundComponent {}
