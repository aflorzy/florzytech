import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavContent, MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

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

  protected company = {
    fullName: 'Florzy Tech LLC',
    shortName: 'Florzy Tech',
    phone: '3202678431',
    email: 'andrew@florzytech.com',
    socials: {
      facebook: 'https://www.facebook.com/FlorzyTechServices/',
      google: 'https://share.google/nOS9qiMaIeqj1XyH0',
    },
  };

  protected sitemap = {
    route: '/',
    title: 'Home',
    children: [
      {
        route: 'faq',
        title: 'Frequently Asked Questions',
        children: [],
      },
      {
        route: 'about',
        title: 'About Us',
        children: [],
      },
    ],
  };
}
