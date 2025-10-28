import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MainContent } from "./main-content/main-content.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ImprintComponent } from "./imprint/imprint.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContent, FooterComponent, ImprintComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sakura";
}