import { Component } from '@angular/core';
import { shirt } from 'src/model/modes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ngPractico';
  showTable: boolean= true
  showList: boolean= true

  shirts: shirt[]= [
    {
      id:1,
      name:"Messi",
      price:150                     
    },
    {
      id:2,
      name:"Dibu",
      price:130                     
    },
    {
      id:3,
      name:"DiMaria",
      price:124                     
    },
    {
      id:4,
      name:"Paredes",
      price:80                     
    },

  ]
  displayedColumns: string[] = ['name', 'price'];

  toggleTable() {
    this.showTable = !this.showTable;
  }

  toggleList() {
    this.showList = !this.showList;
  }
}
