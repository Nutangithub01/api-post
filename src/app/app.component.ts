import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'api-post';

  userli:any;
  constructor(private userdata:UsersdataService) 
  {
    this.userdata.users().subscribe((data)=>{
      console.log("data",data);
      this.userli=data;
    })
  }

  getLoginForm(data:any)
  {
    this.userdata.saveUser(data).subscribe((result => {
      console.log(result);
    }))
    // console.log(data);
  }
}
