import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  fromParentToChild : string = 'This is a message for child from parent';
  message:string;

  constructor() { }

  ngOnInit() {
  }
  parentMethod(data)
  {
    this.message = data;

  }

}