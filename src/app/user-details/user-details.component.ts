import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any; // Holds the user data

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the index from the route parameter
    const index = this.route.snapshot.paramMap.get('id');
    const users = JSON.parse(localStorage.getItem('users') || '[]'); // Retrieve users from local storage

    if (index !== null) {
      this.user = users[+index]; // Fetch the user using the index
    } else {
      this.user = null; // No user found
    }
  }
}
