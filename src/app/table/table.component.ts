import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {TableService} from "../services/table.service";
import {HttpClient} from '@angular/common/http';
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

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource ;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataTable: any=[];
  headerTable:any=[];
  isLoadingResults = true;

  constructor(private tableService: TableService) { }

  ngOnInit() {

    this.tableService.getData().subscribe(data=> {

      this.dataTable=data;
      this.headerTable=Object.keys(data[0]);
      this.headerTable.unshift('#');
      for(let i=0;i<this.dataTable.length; i++){
        this.dataTable[i].position=i+1;
      }
      console.log('data', data);

      console.log('header', this.headerTable);
      this.dataTable = new MatTableDataSource(this.dataTable);
      this.dataTable.paginator = this.paginator;
      this.isLoadingResults = false;
    })
  }

}
