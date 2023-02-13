import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";


@Component({
  selector: 'app-custom-component-usage',
  templateUrl: './custom-component-usage.component.html',
  styleUrls: ['./custom-component-usage.component.css']
})
export class CustomComponentUsageComponent {

  myForm = this.fb.group({name: ['AKM'], age: ['59.5']});

  constructor(
    public fb: FormBuilder
  ) {}
  Show()
  {
    // alert ("hello");
    console.log(this.myForm.value);
  }
  ChangeData()
  {
    this.myForm.get("name")?.setValue("Swapnil");
    this.myForm.get("age")?.setValue("30");
  }
}
