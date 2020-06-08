import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ NgForm}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { StudenComponent } from './studen/studen.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { FormsModule,ReactiveFormsModule} from'@angular/forms';
//import{ ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';
//import { BookService} from './book.service';
//import {InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import {TestData} from './testdada';
import { TemplateFormComponent} from './templateform/templateform.component';
//import { Observable } from 'rxjs/Observable';
import { ReactiveDemoComponent } from './reactivedemo/reactivedemo.component';
@NgModule({
  declarations: [
    //AppComponent,
    StudenComponent,
    StudentdetailsComponent,
    ChildComponent,
    TemplateFormComponent,
    ReactiveDemoComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
    
   // ParentComponent,
   // InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [],
  bootstrap: [ReactiveDemoComponent]
})
export class AppModule { }
