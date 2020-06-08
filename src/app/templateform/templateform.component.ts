import { Component } from '@angular/core';
 
@Component({
  selector: 'app-templateform',
  templateUrl: 'templateform.component.html',
  styleUrls: ['templateform.component.css']
})
export class TemplateFormComponent {
    public RegisterClick(obj){
        console.log(obj.txtPrice);
        console.log(obj);
    }


     


}
