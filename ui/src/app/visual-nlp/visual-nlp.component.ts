import { Component, OnInit, Input } from '@angular/core';
import { PosToken } from '../pos-sentence/pos-token';

@Component({
  selector: 'app-visual-nlp',
  templateUrl: './visual-nlp.component.html',
  styleUrls: ['./visual-nlp.component.css']
})
export class VisualNLPComponent implements OnInit {

  nlpInputText: String = '';
  posTokens: Array<PosToken> = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmitTextToProcess(text) {
    console.log('receiving text to process: ' + text);
    this.nlpInputText = text;
    this.posTokens = [{token: 'kingson', tag: 'NN', tagName: 'Noun'}];
  }

}
