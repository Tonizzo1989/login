import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToUser() {
    this.router.navigate(['/users']);
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }

  goToContacts() {
    this.router.navigate(['/contacts']);
  }
}
