import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {
  empcode=""
  readValues=()=>
  {
    let data:any={
    "empcode":this.empcode}
    console.log(data)
  }

}
