import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  servicesData: Data = new Data();

  ngOnInit(): void {

  }

  getServiceById(id: number) {
    const service = this.servicesData.services.find(service => service.id === id);
    return of(service);
  }



}
