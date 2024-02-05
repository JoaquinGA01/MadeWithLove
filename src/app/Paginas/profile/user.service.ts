import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://tu-api.com'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user`);
  }

  getAddress(): Observable<Address> {
    return this.http.get<Address>(`${this.apiUrl}/address`);
  }

  // Más métodos para actualizar datos...
}