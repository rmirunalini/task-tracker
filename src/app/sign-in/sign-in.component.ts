import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
issubmit:boolean=false;
public email : string = "";
public password:string="";
public email1 : string = "";
public password1:string="";
public firstname1:string="";
public lastname1:string="";
public gender1:string="";
public task:string="";

form!:FormGroup;
form1!:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) { }
    
  ngOnInit(): void {
    this.email1= localStorage.getItem("email")!;
    this.password1= localStorage.getItem("password")!;
    this.firstname1= localStorage.getItem("firstName")!;
    this.lastname1= localStorage.getItem("lastName")!;
    this.gender1=localStorage.getItem("gender")!;
   this.form= this.formBuilder.group({
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.minLength(8)]]
   });
   this.form1= this.formBuilder.group({
    task:['',Validators.required]
  });
  
  }
  correct=false;
  submitted=false;
  wrong=false;
  get f(){
    return this.form.controls;
  }
  click() {
    this.submitted=true;

    if(this.form.invalid){
      return;
    }
    else if(this.form.value.email===this.email1 &&this.form.value.password===this.password1)
    {
    this.issubmit=true;
    this.correct=true;
    
    setInterval(()=>{
      this.correct=false;
    },3000);
   
  }
else{
  this.wrong=true;
  setTimeout(() => {
    this.wrong=false;
  }, 3000);
  
}}
get ff(){
  return this.form1.controls;
}
  submitted1=false;
  
  click1() {
    this.submitted1=true;
    
    if(this.form1.invalid){
      return;
    }
    this.task=this.form1.value.task;
}


}


