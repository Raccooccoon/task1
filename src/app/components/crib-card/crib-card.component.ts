import { Component, Input } from '@angular/core';

import { ICrib } from 'src/app/models/crib.model';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent {

  @Input() crib: ICrib;

  constructor() { }
}
