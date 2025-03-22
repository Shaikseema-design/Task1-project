import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mechanic-details',
  templateUrl: './mechanic-details.component.html',
  styleUrls: ['./mechanic-details.component.css']
})
export class MechanicDetailsComponent implements OnInit {
  mechanic: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    const mechanics = JSON.parse(localStorage.getItem('mechanics') || '[]');
    if (index !== null) {
      this.mechanic = mechanics[+index];
    }
  }
}
