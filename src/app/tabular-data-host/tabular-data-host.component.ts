import { Component } from '@angular/core';
import { TabularDataComponent, TableDef} from '../components/tabular-data/tabular-data.component';

@Component({
  selector: 'app-tabular-data-host',
  templateUrl: './tabular-data-host.component.html',
  styleUrls: ['./tabular-data-host.component.css']
})
export class TabularDataHostComponent {
  dataSource:any = null;
  columntitles:string[] = ['Position', 'Name', 'Weight', 'Symbol'];
  columnNames:string[] = ['position', 'name', 'weight', 'symbol'];
  columns = [
    
    { columnDef: 'position', header: 'Position' },
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'weight', header: 'Weight' },
    { columnDef: 'symbol', header: 'Symbol' },
  ]
  ELEMENT_DATA = [
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
  
  tableDef:TableDef = {columns:this.columns};
  
  ngOnInit()
  {
      var data:any = [];
   
      let obj:any = {};
      for (var element of this.ELEMENT_DATA)
      {
        obj[this.columnNames[0]] = element.position;
        obj[this.columnNames[1]] = element.name;
        obj[this.columnNames[2]] = element.weight;
        obj[this.columnNames[3]] = element.symbol;
        data.push (obj);
        obj = {};
      }
      this.dataSource = data;  
      console.log (data);
  }

}

