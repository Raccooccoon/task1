import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { ICrib } from '../models/crib.model';

const baseUrl = 'data/cribs.json';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCrib$ = new Subject<ICrib>();

  constructor(private http: HttpClient) { }

  public getAllCribs(): Observable<ICrib[]> {
    return this.http.get<ICrib[]>(baseUrl);
  }

  public addCrib(data: ICrib): void {
    data.image = 'default-crib';
    this.newCrib$.next(data);
  }
}
