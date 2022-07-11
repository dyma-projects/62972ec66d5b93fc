import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public usersList: string[] = [];

  private addUser(user: string) {
    this.usersList.push(user);
    this.users.next(this.usersList);
  }
  
  constructor() { }
}
