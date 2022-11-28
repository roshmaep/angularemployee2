import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empcode=""
  name=""
  designation=""
  salary=""
  phonenumber=""
  email=""
  company=""
  yearofexperience=""

  readValues=()=>
  {
    let data:any={
      "empcode":this.empcode,
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "phonenumber":this.phonenumber,
      "email":this.email,
      "company":this.company,
      "yearofexperience":this.yearofexperience
    }
    console.log(data)
  }
}
