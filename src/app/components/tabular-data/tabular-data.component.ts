import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabular-data',
  templateUrl: './tabular-data.component.html',
  styleUrls: ['./tabular-data.component.css']
})
export class TabularDataComponent {
  @Input() tableDef:TableDef = {columns:[]};  // Columns and any table level options can be provided
 // @Input() columns: Array<TableColumn> = [];
  @Input() dataset: Array<any> = [];

  displayedColumns: string[] = [];
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  highlightedRow:any = null;


  ngOnInit() {

    // set table columns
    this.displayedColumns = this.displayedColumns.concat(this.tableDef.columns.map(x => x.columnDef));    // pre-fix static

    this.dataSource = new MatTableDataSource(this.dataset);
  }
  onClick(row:any)
  {
      console.log ("row clicked"+JSON.stringify(row));
      if (row == this.highlightedRow) // already selected
          this.highlightedRow = null;
      else
          this.highlightedRow = row; // tbis row gets selected
  }
}

export interface TableColumn
{
   columnDef:string;
   header:string
}
export interface TableDef
{
  columns:Array<TableColumn>;
}
