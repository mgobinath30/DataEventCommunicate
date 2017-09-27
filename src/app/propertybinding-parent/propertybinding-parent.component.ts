import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-propertybinding-parent',
  templateUrl: './propertybinding-parent.component.html',
  styleUrls: ['./propertybinding-parent.component.css']
})
export class PropertybindingParentComponent implements OnInit {
@Output() myEvent=new EventEmitter<{age:number}>();
  serverElements = [
    {type:'Learning Data Binding',content:'Sample Content Text'},
    {type:'Learning Data Binding 1',content:'Sample Content Text 1'},
    {type:'Learning Data Binding 2',content:'Sample Content Text 2'},
    {type:'Learning Data Binding 3',content:'Sample Content Text 3'}
  ];

  heading : string = "My First Property DataBinding";


  constructor() { }

  ngOnInit() {
  }

  onparentAdd(details:{name:string}){
    console.log(details.name);
    this.myEvent.emit({age:30});
  }

}
