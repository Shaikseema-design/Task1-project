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
