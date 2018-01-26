import { Component } from '@angular/core'

import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'complex-form',
  templateUrl: './complexForm.component.html'
})

export class FormComponent {
  complexForm: FormGroup

  // 建構一個實例 FormBuilder
  constructor(fb: FormBuilder) {
    // 用 FormBuilder 來製造表格
    this.complexForm = fb.group({
      'account': '',
      'password': '',
      'gender': 'Female',
      'hiking': false,
      'swimming': false,
      'running': false
    })
  }

  // 提交表格的 function
  submitForm(form: any): void{
    console.log(`Form:`, form)
  }
}