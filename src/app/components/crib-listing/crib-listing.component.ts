import { Component, OnInit } from '@angular/core';

import { tap, catchError } from 'rxjs/operators';

import { ICrib } from 'src/app/models/crib.model';
import { CribsService } from 'src/app/services/cribs.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  public cribs: ICrib[] = [];
  public error: string = '';
  public sortField: string = 'price';
  public sortDirection: string ='asc';
  public sortFields: string[] = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];

  constructor(
    private cribsService: CribsService,
    public utilService: UtilService
  ) { }

  public ngOnInit(): void {
    this.cribsService.getAllCribs().pipe(
      tap((cribs) => this.cribs = cribs),
      catchError((error: Error) => this.error = error.message) 
    ).subscribe();

    this.cribsService.newCrib$.pipe(
      tap((crib) => this.cribs = [crib, ...this.cribs])
    ).subscribe();
  }
}
