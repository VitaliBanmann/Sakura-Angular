import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: "app-landingPage",
  standalone: true,
  imports: [CommonModule, Navbar],
  template: `
  <section>
    <app-navbar></app-navbar>
    <h1 class="fontRaleway">SAKURA RAMEN</h1>
    <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
  </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}