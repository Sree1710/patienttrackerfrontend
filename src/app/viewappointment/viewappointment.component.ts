import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  constructor(private api:PatientserviceService) {
    api.viewApp().subscribe((response=>{
      this.data3=response
      // console.log(response);
    }))
   }
  
  ngOnInit(): void {
  }
data3:any=[]
}
