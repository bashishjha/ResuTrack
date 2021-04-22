import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private resumeService:ResumeService) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.resumeService.getUser().subscribe((result)=>{
      console.log(result);
      console.log(this.loginUser.value);
    });
  }

}
