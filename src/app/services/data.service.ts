import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Root } from '../models/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  path = `https://my-json-server.typicode.com/May-Abdelgany/E-TEST`;
  searchKey = new Subject<string>();
  constructor(private http: HttpClient) {}
  getData(): Observable<Root> {
    return this.http.get<Root>(`${this.path}/db`);
  }
}
