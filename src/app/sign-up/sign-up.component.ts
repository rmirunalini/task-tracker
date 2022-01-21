import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,NgModel} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('firstName') nameKey!: ElementRef;
  @ViewChild('lastName') lnameKey!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  @ViewChild('gender')gender!:ElementRef;
  registerForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router){
  }

  ngOnInit(){
   this.registerForm= this.formBuilder.group({
     firstName:['',Validators.required],
     lastName:['',Validators.required],
     gender:['',Validators.required],
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.minLength(8)]]
   })
  }
  
  submitted=false;
  valiadted=false;
  get f(){
    return this.registerForm.controls;
  }
  onSubmit(pagename:string):void{
    this.submitted=true;

    if(this.registerForm.invalid){
      return;
    }
    this.valiadted=true;
    localStorage.setItem("firstName", this.nameKey.nativeElement.value);
    localStorage.setItem("lastName", this.lnameKey.nativeElement.value);
    localStorage.setItem("email", this.email.nativeElement.value);
    localStorage.setItem("password", this.password.nativeElement.value);
    localStorage.setItem('gender', this.registerForm.controls['gender'].value);
    console.log(localStorage.getItem("firstName"));
    console.log(localStorage.getItem("lastName"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("password"));
    console.log(localStorage.getItem("gender"));
    //alert("Data Added Successfuly!!!! \n Now You can Sign-In")
    setTimeout(() => {
      this.router.navigate([`${pagename}`]);
    }, 3000);
    

  }

}