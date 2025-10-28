import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landingPage/landingPage.component";
import { OurMenuComponent } from './our-menu.component/our-menu.component';
import { HowToOrder } from './how-to-order/how-to-order';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, OurMenuComponent, HowToOrder],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContent {

}