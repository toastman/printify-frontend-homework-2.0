import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blueprint } from '../models/blueprint';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Array<Blueprint>>{
    return this.http.get<Array<Blueprint>>('https://run.mocky.io/v3/b9e8f542-9816-4175-9165-9d65a8a481e7')
  }

  getProductById(id: string): Observable<Blueprint>{
    return this.http.get<Blueprint>(`https://run.mocky.io/v3/c3a4c523-7e87-4f6f-b9a8-f501c053fd65?id=${id}`)
  }
}
