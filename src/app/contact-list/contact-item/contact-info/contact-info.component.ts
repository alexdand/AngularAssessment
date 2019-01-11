import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  template: `
    <div class="info-item">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .info-item {
      padding: 1.5em 1em;
      border-bottom: 1px solid lightgray;
    }
  `]
})
export class ContactInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
