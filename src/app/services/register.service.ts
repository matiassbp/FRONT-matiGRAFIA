// register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/register', { username, password });
  }
}
