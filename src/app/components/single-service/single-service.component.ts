import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.css'
})
export class SingleServiceComponent {

  service:any

  constructor(
    private route: ActivatedRoute, private homeComponent: HomeComponent

  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.homeComponent.getServiceById(id).subscribe((service: any) => {
        this.service = service;
      });
    });
  }
}
