import { Component } from '@angular/core'

import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'validate-form',
  templateUrl: './validateForm.component.html'
})

export class FormComponent {
  complexForm: FormGroup
  data = {
    activities: [
      { name: 'hiking',  selected: true, id: 12 },
      { name: 'swimming',  selected: false, id: 2 },
      { name: 'running',  selected: false, id: 3 }
    ]
  }
  // 直接綁定用資料
  acc = [
    { name: 'hiking',  selected: true, id: 12 },
    { name: 'swimming',  selected: false, id: 2 },
    { name: 'running',  selected: false, id: 3 }
  ]
  // 建構一個實例 FormBuilder
  constructor(private _fb: FormBuilder) {
    // 用 FormBuilder 來製造表格
    this.complexForm = this._fb.group({
      'account': [null, Validators.required],
      'password': [null,  Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)])],
      'gender': 'Female',
      'activities': this.buildActivities(),
      'hiking': false,
      'swimming': false,
      'running': false
    })

    // 用來觀察表格元素的變化
    this.complexForm.valueChanges.subscribe( (form: any) => {
      console.log('form changed to:', form);
    })
  }

  get activities(): FormArray {
    return this.complexForm.get('activities') as FormArray;
  };

  buildActivities () {
    let arr = this.data.activities.map(item => {
      return this._fb.control(item.selected)
    })
    return this._fb.array(arr)
  }
  // 提交表格的 function
  submitForm (form: any): void{
    // 如果使用 formgroup 必須要把 skill 拼回去
    console.log(`Form:`, form)
  }

  // 直接綁定測試鈕
  test (): void {
    console.log(this.acc)
  }
}