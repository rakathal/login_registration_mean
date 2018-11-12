import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  username: String = '';
  constructor(private _userService: UserService, private _router: Router) {
    this._userService.user()
    .subscribe(
      data => this.addName(data),
      error => this._router.navigate(['/login'])
    );
  }

  addName(data) {
    this.username = data.username;
  }
  ngOnInit() {
  }

  logout() {
    this._userService.logout()
    .subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/login']);
      },
      error => console.log(error)
    );
  }

}
