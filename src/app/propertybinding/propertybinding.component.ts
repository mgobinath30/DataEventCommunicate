import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  @Input() element :Element ;

  @Input() name : string;

  /* @Output() onchildAdd = new EventEmitter(); */

  @Output() onchildAdd = new EventEmitter<{name:string}>();

  constructor() { }
 
  ngOnInit() {
  }

 /*add(){
   this.onchildAdd.emit();
 }*/

 add(){
   this.onchildAdd.emit({name:'gobinath  '});
 }


}

interface Element{
  type : string,
  content : string
}