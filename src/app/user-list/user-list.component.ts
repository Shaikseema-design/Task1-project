import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[] = []; // Holds the list of users

  constructor() {}

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.userList = JSON.parse(storedUsers); // Parse and store users data
    }
  }
  // Method to add a new user
  addNewUser(): void {
    const fullName = prompt('Enter full name:');
    const lastName = prompt('Enter last name:');
    const address = prompt('Enter address:');
    const occupation = prompt('Enter occupation:');

    if (fullName && lastName && address && occupation) {
      const newUser = { fullName, lastName, address, occupation }; // Create new user object
      this.userList.push(newUser); // Add new user to the list
      localStorage.setItem('users', JSON.stringify(this.userList)); // Update local storage
      alert('New person added successfully!');
    } else {
      alert('All fields are required to add a new person.');
    }
  }

  // Method to delete a user by index
  deleteUser(index: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userList.splice(index, 1); // Remove the user from the list
      localStorage.setItem('users', JSON.stringify(this.userList)); // Update local storage
    }
  }

  // Method to edit user details by index
  editUser(index: number): void {
    const updatedFullName = prompt('Enter new full name:', this.userList[index].fullName);
    const updatedLastName = prompt('Enter new last name:', this.userList[index].lastName);
    const updatedAddress = prompt('Enter new address:', this.userList[index].address);
    const updatedOccupation = prompt('Enter new occupation:', this.userList[index].occupation);

    if (updatedFullName && updatedLastName && updatedAddress && updatedOccupation) {
      this.userList[index].fullName = updatedFullName;
      this.userList[index].lastName = updatedLastName;
      this.userList[index].address = updatedAddress;
      this.userList[index].occupation = updatedOccupation;

      localStorage.setItem('users', JSON.stringify(this.userList)); // Save updated data to local storage
      alert('User details updated successfully!');
    } else {
      alert('All fields are required to update user details.');
    }
  }
}
