import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, HeaderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
