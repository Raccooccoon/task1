import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CribsService } from 'src/app/services/cribs.service';
import { UtilService } from 'src/app/services/util.service';
import { ICrib } from 'src/app/models/crib.model';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent {

  @ViewChild('newCribForm') newCribForm: NgForm;

  public propertyTypes: string[] = [
    'condo',
    'duplex',
    'house'
  ];

  constructor(
    private cribsService: CribsService,
    public utilService: UtilService
  ) { }

  public onCribSubmit(crib: ICrib): void {
    this.cribsService.addCrib(crib);
    this.newCribForm.reset();
  }
}
