import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nlp-input',
  templateUrl: './nlp-input.component.html',
  styleUrls: ['./nlp-input.component.css']
})
export class NLPInputComponent implements OnInit {

  @Input()
  content: String = '';

  @Output()
  submit: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onProcessButtonClicked() {
    this.submit.emit(this.content);
  }

}
