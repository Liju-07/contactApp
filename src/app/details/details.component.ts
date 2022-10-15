import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.fetch()
  }
  fetch=()=>{
    this.api.show().subscribe(
      (data)=>{
        this.details=data
      }
    )
  }


  details:any=[]
  ngOnInit(): void {
  }

}
