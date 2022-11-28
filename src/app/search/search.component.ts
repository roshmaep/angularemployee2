import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  empcode=""
  readValues=()=>
  {
    let data:any={
    "empcode":this.empcode}
    console.log(data)
  }

}
