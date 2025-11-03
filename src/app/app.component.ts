import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { Navbar } from "./main-content/landingPage/navbar/navbar.component"; // Navbar importieren

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, Navbar], // Navbar hinzufügen
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sakura";
}