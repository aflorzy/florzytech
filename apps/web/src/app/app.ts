import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavContent, MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { companyDetails } from './constants/metadata.constant';

@Component({
  imports: [
    RouterModule,
    MatSidenavContent,
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatIconModule,
    MatButtonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected currentYear = new Date().getFullYear();
  protected company = companyDetails;
}
