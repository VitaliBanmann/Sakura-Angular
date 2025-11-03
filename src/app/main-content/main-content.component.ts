import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landingPage/landingPage.component";
import { OurMenuComponent } from './our-menu.component/our-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { LocationComponent } from './location/location.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, OurMenuComponent, HowToOrderComponent, LocationComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContent {

}