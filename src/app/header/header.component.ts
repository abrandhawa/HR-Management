import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NewEmplooyeComponent } from '../new-emplooye/new-emplooye.component';
import { EmplooyesRecordComponent } from '../emplooyes-record/emplooyes-record.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,NewEmplooyeComponent,EmplooyesRecordComponent,PageNotFoundComponent,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
