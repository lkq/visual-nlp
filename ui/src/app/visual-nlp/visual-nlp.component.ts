import { Component, OnInit, Input } from '@angular/core';
import { PosToken } from '../services/nlp-results';
import { PosService } from '../services/pos.service';

@Component({
  selector: 'app-visual-nlp',
  templateUrl: './visual-nlp.component.html',
  styleUrls: ['./visual-nlp.component.css']
})
export class VisualNLPComponent implements OnInit {

  nlpInputText: String = '';
  posTokens: Array<PosToken> = [];
  posService = new PosService();

  constructor() { }

  ngOnInit() {
  }

  onSubmitTextToProcess(text) {
    console.log('receiving text to process: ' + text);
    this.nlpInputText = text;
    this.posTokens = this.posService.processPartOfSpeech(this.nlpInputText);
    // this.posTokens = [{token: 'kingson', tag: 'NN', tagName: 'Noun'}];
  }

}
