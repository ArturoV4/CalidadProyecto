import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  hide = true;
  active = false;

  formLogin = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  onSubmit() {
    console.log('Hola');
  }

}
