import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Contact} from '../contact'

@Component({
  selector: 'app-reform',
  templateUrl: './reform.component.html',
  styleUrls: ['./reform.component.css']
})
export class ReformComponent implements OnInit {
  contact=new Contact();//code to create object from Contact class
  contactform=new FormGroup({
    firstname:new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z]*$")]),
    lastname:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  });
  submit()
  {
    //this code is written to get data from control object and set it into contact object
    this.contact.firstname=this.contactform.controls['firstname'].value;
    this.contact.lastname=this.contactform.controls['lastname'].value;
    this.contact.phone=this.contactform.controls['phone'].value;
    this.contact.email=this.contactform.controls['email'].value;
    this.contact.password=this.contactform.controls['password'].value;
    console.log(this.contact);
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
