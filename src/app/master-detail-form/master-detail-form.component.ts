import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableModule, MatTableDataSource, MatTable} from '@angular/material/table';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Table with selection
 */
 @Component({
  selector: 'app-master-detail-form',
  templateUrl: './master-detail-form.component.html',
  styleUrls: ['./master-detail-form.component.css']
})
export class MasterDetailFormComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(false, []);

  formGroup: FormGroup = this.formBuilder.group({
    'name': [null, Validators.required],
    'weight': [null, Validators.required],
    'symbol': [null, Validators.required],
  }
  );

  constructor (private formBuilder: FormBuilder)
  {
  
  }

  ShowDataForRow(row:number)
  {
    // this.selection.toggle(row);
    console.log ("row number" + row + " clicked");  
  }
  clickedMe(element:PeriodicElement)
  {
    this.name.setValue (element.name);
    this.weight.setValue (element.weight);
    this.symbol.setValue (element.symbol);
    // alert (element.name);
  }


  // form field names

  get name() {
    return this.formGroup.get('name') as FormControl
  }
  get weight() {
    return this.formGroup.get('weight') as FormControl
  }
  get symbol() {
    return this.formGroup.get('symbol') as FormControl
  }

}

























