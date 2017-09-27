import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicate',
  templateUrl: './comunicate.component.html',
  styleUrls: ['./comunicate.component.css']
})
export class ComunicateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  function1(child:{age:number}){
    console.log("Function1 Called"+'----'+child.age);
  }
}
