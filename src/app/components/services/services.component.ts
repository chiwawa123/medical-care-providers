import { Component } from '@angular/core';
import { Data } from '../../models/data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  servicesData: Data = new Data();


}
