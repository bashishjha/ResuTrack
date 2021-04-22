import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  url="http://localhost:3000/res";
  userurl="http://localhost:3000/user";

  constructor(private http:HttpClient) { }
  getList(){
   return this.http.get(this.url); 
  }

  addList(data: []){    
    return this.http.post(this.url,data);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  edit(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  update(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }
  addUser(data:[]){
      return this.http.post(this.userurl,data);  
  }
  getUser(){
    return this.http.get(this.userurl);
  }
}
