import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = { email: '', password: '' };

  constructor(private router: Router) {}
  //the user or mechanic who already have an account they login with their credentails in the login page.they email and password is matched with the email and password which is already exist in the local storage they successfully login into the page else shows an alert like invalid credentials
  login(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) => u.email === this.credentials.email && u.password === this.credentials.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials.');
    }
  }
}
