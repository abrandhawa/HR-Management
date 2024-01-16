import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-layout-component',
    standalone: true,
    templateUrl: './layout-component.component.html',
    styleUrl: './layout-component.component.css',
    imports: [HeaderComponent, RouterOutlet, FooterComponent, HomeComponent]
})
export class LayoutComponentComponent {

}
