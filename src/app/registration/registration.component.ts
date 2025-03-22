import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData: any = { name: '', email: '', phone: '', password: '' };

  register(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.formData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    this.formData = { name: '', email: '', phone: '', password: '' };
  }
}
