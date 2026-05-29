import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  testimonials = [
    {
      quote: 'Fixed my stick drift in under 2 hours. Super professional and affordable!',
      author: 'Jake R., Duluth',
    },
    {
      quote:
        'HDMI port was completely broken — thought my PS5 was done for. Andrew had it working same day.',
      author: 'Megan T., Superior',
    },
    {
      quote: 'Fast, honest, and way cheaper than buying a new controller. 10/10 would recommend.',
      author: 'Tyler S., Hermantown',
    },
  ];
}
