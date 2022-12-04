import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarLink } from '../../interfaces/navbar-link.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  protected readonly links: NavbarLink[] = [
    { title: 'Wykres', path: '/chart' },
    { title: 'Dodanie danych', path: '/form' }
  ];

}
