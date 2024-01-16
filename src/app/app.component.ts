import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';







@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgClass, RouterModule]
})
export class AppComponent {
  title = 'HR-Managment';



  
}
