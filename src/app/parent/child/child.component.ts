import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() receivedParentMessage:string;

  @Output() messageToEmitt = new EventEmitter <string>()

  constructor() { }

  ngOnInit() {
  }

  pingParent(ping)
  {
    this.messageToEmitt.emit(this.receivedParentMessage)
  }

}