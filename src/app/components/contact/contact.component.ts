import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Data } from '../../models/data';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

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
