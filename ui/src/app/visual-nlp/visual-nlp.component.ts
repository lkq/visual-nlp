import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visual-nlp',
  templateUrl: './visual-nlp.component.html',
  styleUrls: ['./visual-nlp.component.css']
})
export class VisualNLPComponent implements OnInit {

  nlpInputText: String = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmitTextToProcess(text) {
    console.log('receiving text to process: ' + text);
    this.nlpInputText = text;
  }

}
