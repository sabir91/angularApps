import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudenComponent} from 'src/app/studen/studen.component';
import { StudentdetailsComponent } from 'src/app/studentdetails/studentdetails.component';


const routes: Routes = [
  {
    path:'',redirectTo:'studen', pathMatch:'full'
  },
  
  {
    path:'studen',component:StudenComponent
  },
  {
    path:'studentdetails',component:StudentdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
