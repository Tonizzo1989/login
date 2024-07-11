import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLoginView: boolean = true;

  userRegisterObject: any = {
    userName: '',
    password: '',
    emailId: '',
  };

  onRegister() {
    debugger;
    const isLocalData = localStorage.getItem('angular18Local');

    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObject);
      localStorage.setItem('angular18Local', JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObject);
      localStorage.setItem('angular18Local', JSON.stringify(localArray));
    }
  }
}
