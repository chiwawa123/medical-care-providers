import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { FaqsComponent } from './components/faqs/faqs.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'services',component:ServicesComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'service',component:SingleServiceComponent},
  { path:'faqs',component:FaqsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
