import {Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reactivedemo',
    templateUrl: 'reactivedemo.component.html',
    styleUrls: ['reactivedemo.component.css']
})
export class ReactiveDemoComponent {
   public frmRegister = new FormGroup({
       Name: new FormControl(''),
       Price: new FormControl(''),
       frmDetails: new FormGroup({
           City: new FormControl(''),
           IsInStock: new FormControl('')
       })
   });
   public UpdateForm() {
       this.frmRegister.patchValue({
           Name: 'Nike Casuals',
           frmDetails: {
               City: 'Delhi',
               IsInStock: true
           }
       });
   }
}
