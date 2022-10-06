import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }
  dregister(data:any){
    return this.http.post<any>('http://localhost:3200/dr',data)
  }
  pregister(dataa:any){
    return this.http.post<any>('http://localhost:3200/pr',dataa)
  }
  dlogin(data3:any){
    return this.http.post<any>('http://localhost:3200/dlogin',data3)
  }
  plogin(data5:any){
    return this.http.post<any>('http://localhost:3200/plogin',data5)
  }
  bapp(data4:any){
    return this.http.post<any>('http://localhost:3200/bp',data4)
  }
  docDetail=()=>
  {
    return this.http.get('http://localhost:3200/docDetail')
  }
  patDetail=()=>
  {
    return this.http.get('http://localhost:3200/patDetail')
  }
  DocDetail=()=>
  {
    return this.http.get('http://localhost:3200/DocDetail')
  }
  viewApp=()=>
  {
    return this.http.get('http://localhost:3200/viewApp')
  }
  ViewApp=()=>
  {
    return this.http.get('http://localhost:3200/ViewApp')
  }
}
