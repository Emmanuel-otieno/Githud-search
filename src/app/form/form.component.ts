import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  searchName:string;
  @Output() search = new EventEmitter<any>();

  constructor() { }
  searchUserName(){
    this.search.emit(this.searchName);
  }

  ngOnInit(): void {
  }

}
