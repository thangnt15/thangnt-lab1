import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponentComponent,HomeComponentComponent ,FooterComponentComponent],
  templateUrl: './home.html'
})
export class AppHaha {
  
}
