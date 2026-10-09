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
      quote:
        'I went to Florzy tech services for Liquid Metal Replacement and a deep clean for my PS5. I was able to drop it off and have it fixed within hours. Andrew not only does phenomenal work but he also is a friendly guy. There is no question where I\'d go for PlayStation repairs in the future. Highly recommend!',
      author: 'Jared',
    },
    {
      quote: 'Andrew is skilled and professional. I highly recommend him!',
      author: 'Stacy',
    },
    {
      quote:
        'My son broke a joy con, I was able to drop it off and have it fixed in less than 24 hours. I\'d recommend Florzy tech services to everyone.',
      author: 'John',
    },
  ];
}
