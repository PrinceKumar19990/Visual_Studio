import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit{
  ngOnInit(): void {}
  constructor (){}
 users=[
  {
  id:100,
 firstName:'rahul',
  lastName:'Kumar',
 emailId:'rahul.kumar@gmail.com'
},
  {
  id:101,
  firstName:'mukul',
 lastName:'kumar',
  emailId:'upasana.agarwal@gmail.com'
},
  {
 id:102,
 firstName:'Prince',
 lastName:'Kumar',
  emailId:'prince.kumar@gmail.com'
      }
    ];
  }
