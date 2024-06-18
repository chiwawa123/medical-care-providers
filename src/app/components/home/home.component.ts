import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router:Router){}

  servicesData: Data = new Data();

  ngOnInit(): void {

  }

  setData(data: any) {
    sessionStorage.setItem("data", JSON.stringify(data));
    this.router.navigate(['/service']);

  }





}
