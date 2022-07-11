import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;
  public usersList: string[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.users.subscribe( (users: string[]) => {
      this.usersList = users;
    } )
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.usersList.push(username);
      this.userService.users.next(this.usersList);
      this.el.nativeElement.value = '';
    }
  }

}
