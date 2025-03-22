import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent implements OnInit {
  mechanicList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    const storedMechanics = localStorage.getItem('mechanics');
    if (storedMechanics) {
      this.mechanicList = JSON.parse(storedMechanics);
    }
  }
  // Method to add a new mechanic
  addNewMechanic(): void {
    const fullName = prompt('Enter full name:');
    const lastName = prompt('Enter last name:');
    const address = prompt('Enter address:');
    const occupation = prompt('Enter occupation:');

    if (fullName && lastName && address && occupation) {
      const newMechanic = { fullName, lastName, address, occupation }; // Create new mechanic object
      this.mechanicList.push(newMechanic); // Add new mechanic to the list
      localStorage.setItem('mechanics', JSON.stringify(this.mechanicList)); // Update local storage
      alert('New mechanic added successfully!');
    } else {
      alert('All fields are required to add a new mechanic.');
    }
  }

  deleteMechanic(index: number): void {
    if (confirm('Are you sure you want to delete this mechanic?')) {
      this.mechanicList.splice(index, 1);
      localStorage.setItem('mechanics', JSON.stringify(this.mechanicList));
      alert('Mechanic deleted successfully!');
    }
  }
  editMechanic(index: number): void {
    const updatedFullName = prompt('Enter new full name:', this.mechanicList[index].fullName);
    const updatedLastName = prompt('Enter new last name:', this.mechanicList[index].lastName);
    const updatedAddress = prompt('Enter new address:', this.mechanicList[index].address);
    const updatedOccupation = prompt('Enter new occupation:', this.mechanicList[index].occupation);

    if (updatedFullName && updatedLastName && updatedAddress && updatedOccupation) {
      this.mechanicList[index].fullName = updatedFullName;
      this.mechanicList[index].lastName = updatedLastName;
      this.mechanicList[index].address = updatedAddress;
      this.mechanicList[index].occupation = updatedOccupation;

      localStorage.setItem('mechanics', JSON.stringify(this.mechanicList)); // Save updated data to local storage
      alert('Mechanic details updated successfully!');
    } else {
      alert('All fields are required to update mechanic details.');
    }
  }
  
}
