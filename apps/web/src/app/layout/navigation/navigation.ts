import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  open = false;
  toggle() {
    this.open = !this.open;
  }
  close() {
    this.open = false;
  }
}
