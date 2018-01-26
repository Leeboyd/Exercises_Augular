import { Component } from '@angular/core'

@Component({
  selector: 'simple-form',
  templateUrl: './simpleForm.component.html'
})

export class FormComponent {
  submitForm(form: any): void{
    console.log(`Form:`, form)
  }
}

