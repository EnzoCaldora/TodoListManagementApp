import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponents} from "./tasks/tasks.components";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(userId: string){
    this.selectedUserId = userId;
  }

}
