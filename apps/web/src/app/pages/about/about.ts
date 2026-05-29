import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class About {
  private yearStartedService = 2018;

  protected yearsInService = new Date().getFullYear() - this.yearStartedService;
}
