import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { companyDetails } from '../../constants/metadata.constant';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected companyDetails = companyDetails;
}
