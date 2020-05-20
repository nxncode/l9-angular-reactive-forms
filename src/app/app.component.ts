import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  formData = new FormGroup({
    name:new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
  });
}
