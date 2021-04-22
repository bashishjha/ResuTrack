import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addResume= new FormGroup({
    date: new FormControl(''),
    company: new FormControl(''),
    jd: new FormControl(''),
    resume: new FormControl(''),
    apply: new FormControl(''),
    rounds: new FormControl(''),
    result: new FormControl(''),
    feedback: new FormControl('')
  })
  public msg=false;

  constructor(private route:ActivatedRoute, private resu: ResumeService) { }

  ngOnInit(): void {
  }
  onSubmit(){   
    this.resu.getUser().subscribe((result)=>{
      console.log(result);
      
    }) 
    this.resu.addList(this.addResume.value).subscribe((result)=>{
      console.log("result",result);
      this.msg=true;
      this.addResume.reset({});
    })
  }
  alertClose(){
    this.msg=false;
  }

}
