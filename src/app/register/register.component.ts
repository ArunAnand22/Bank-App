import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}
  ngOnInit():void{}
//Model for register
  registerForm=this.fb.group({//group
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  //control passes through html page

  register(){
    var acno=this.registerForm.value.acno;
    var uname=this.registerForm.value.uname;
    var pswd=this.registerForm.value.pswd;
    var userDetails=this.ds.userDetails
    const result = this.ds.register(acno,uname,pswd)
    if(this.registerForm.valid){
    if(result){
      alert('Register successful')
      this.router.navigateByUrl('')
    }else{
      alert('Register fails')
      console.log(this.registerForm.get('uname')?.errors);
      
    }

  }
}
}
