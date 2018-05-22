import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users:string[] = ['John', 'Jil', 'Peter'];
  constructor() { }
  getFirstUser(){
    return this.users[0];
  }
}
