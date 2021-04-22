import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private resume:ResumeService) { }
  records:any=[];
  ngOnInit(): void {
    this.resume.getList().subscribe((result)=>
    {
      console.log(result);
      this.records=result;
    });
  }
  delete(id:number){
      this.records = this.records.filter((e:any) => e.id !== id)
      this.resume.delete(id).subscribe((result)=>{
        console.log(result);
        
      });
  }

}
