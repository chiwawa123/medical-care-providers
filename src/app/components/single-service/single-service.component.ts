import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Data } from '../../Interfaces/data';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.css'
})
export class SingleServiceComponent implements OnInit{

  service: Data | null = null;
  ngOnInit(): void {
    this.getData();
  }

     getData(): Data | null {
      const data = sessionStorage.getItem("data");
      return this.service = data ? JSON.parse(data) : null;
    }


}
