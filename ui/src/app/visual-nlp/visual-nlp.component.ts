import { Component, OnInit, Input } from '@angular/core';
import { PosToken, NlpResults } from '../services/nlp-results';
import { NlpService } from '../services/nlp.service';

@Component({
  selector: 'app-visual-nlp',
  templateUrl: './visual-nlp.component.html',
  styleUrls: ['./visual-nlp.component.css']
})
export class VisualNLPComponent implements OnInit {

  nlpInputText: String = '';
  nlpService = new NlpService();
  nlpResults: NlpResults = new NlpResults();

  constructor() { }

  ngOnInit() {
  }

  onSubmitTextToProcess(text) {
    console.log('receiving text to process: ' + text);
    this.nlpInputText = text;
    this.nlpResults = this.nlpService.processText(this.nlpInputText);
  }

}
