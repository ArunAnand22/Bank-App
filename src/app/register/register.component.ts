import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  uname:any;
  acno:any;
  pswd:any;

  constructor(private ds:DataService,private router:Router){}
  ngOnInit():void{}

  register(){
    var acno=this.acno;
    var uname=this.uname;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails
    const result = this.ds.register(acno,uname,pswd)

    if(result){
      alert('Register successful')
      this.router.navigateByUrl('')
    }else{
      alert('Register fails')
    }

  }
}
