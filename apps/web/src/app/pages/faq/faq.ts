import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {}
