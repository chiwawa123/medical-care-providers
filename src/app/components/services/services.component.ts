import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  constructor(private router:Router){
    
  }
  servicesData: Data = new Data();

  ngOnInit(): void {

  }

  setData(data: any) {
    sessionStorage.setItem("data", JSON.stringify(data));
    this.router.navigate(['/service']);

  }



}
