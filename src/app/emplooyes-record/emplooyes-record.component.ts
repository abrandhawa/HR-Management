import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmplooyeDataService } from '../Services/emplooye-data.service';
import { empVM } from '../../Models/Models';




@Component({
  selector: 'app-emplooyes-record',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './emplooyes-record.component.html',
  styleUrl: './emplooyes-record.component.css'
})
export class EmplooyesRecordComponent {
      
  users:empVM[];
  constructor(private empData:EmplooyeDataService){
    this.users=empData.emplooyes();
  }

  

}
