import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  empcode=""
  readValues=()=>
  {
    let data:any={
    "empcode":this.empcode}
    console.log(data)
  }

}
