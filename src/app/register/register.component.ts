import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private resumeServie:ResumeService) { }

  ngOnInit(): void {
    
    
  }
  onSubmit(){
    this.resumeServie.addUser(this.registerUser.value).subscribe((result)=>{
      console.log(result);
      this.registerUser.reset({});
      
    })
    
  }

}
