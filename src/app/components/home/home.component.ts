import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data';
import { Observable, of } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  serviceID = 'service_kk1bftf';
  templateID = 'template_nvrb6i8';
  userID = 'glDDrVtU7OwYCSnHi';

  constructor(private router:Router,private toastr: ToastrService){}

  servicesData: Data = new Data();

  ngOnInit(): void {

  }

  setData(data: any) {
    sessionStorage.setItem("data", JSON.stringify(data));
    this.router.navigate(['/service']);

  }

  public sendEmail(e: Event) {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    emailjs.sendForm(this.serviceID, this.templateID, formElement, this.userID)
      .then(
        () => {
          console.log('SUCCESS!');
          this.toastr.success('Email sent successfully!', 'Success');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }







}
