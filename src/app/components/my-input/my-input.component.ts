// 10-FEB-2023 - TODO: This is incomplete implementation. only compilation errors removed.
//
// https://stackoverflow.com/questions/56979532/angular-reactive-forms-best-way-to-implement-input-components-wrappers

import { Component, ViewChild, ElementRef, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'my-input',
  template: `
    <label [for]="id">{{ label }}</label>
    <input [id]="id" type="text" [value]="value" (change)="onChange($event)"/>
  `,
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true
    } 
  ]
})
export class MyInputComponent implements ControlValueAccessor {
  @ViewChild('input', {static: true, read: ElementRef})
  inputElementRef!: ElementRef;

  @Input() id: string ="";
  @Input() label: string ="";

  private _value: any = "Hello !";

  set value(value: any) {
    this._value = value;
  }

  get value(): any {
    return this._value;
  }

  // onChange = event => {};
  onChange(event:any){
   // this._value = this.inputElementRef.nativeElement.value;
    console.log ("value=" + this._value);
    console.log ("onChange" + JSON.stringify(event));
    alert ("value changed")
  }
  // onTouched = () => {};
  onTouched () {}

  writeValue(value: any) {
    this.value = value;
    
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
