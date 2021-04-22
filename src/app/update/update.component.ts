import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateResume = new FormGroup({
    date: new FormControl(''),
    company: new FormControl(''),
    jd: new FormControl(''),
    resume: new FormControl(''),
    apply: new FormControl(''),
    rounds: new FormControl(''),
    result: new FormControl(''),
    feedback: new FormControl('')

  })
  public msg = false;
  constructor(private route: ActivatedRoute, private resumeService: ResumeService) { }

  ngOnInit(): void {
    // this.resumeService.edit(this.route.snapshot.params.id).subscribe((result)=>{
    //   console.log(result);
      
    // })
    this.resumeService.edit(this.route.snapshot.params.id).subscribe((result) => {
      this.updateResume.reset(result);
    })

  }
  onSubmit() {
    this.resumeService.update(this.route.snapshot.params.id,this.updateResume.value).subscribe((result)=>{
      console.log(result);
      
    })
    this.msg = true;
  }
  alertClose() {
    this.msg = false;
  }
}
