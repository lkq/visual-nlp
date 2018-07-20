import { Component, OnInit } from '@angular/core';
import { NlpResults } from '../services/nlp-results';
import { NlpService } from '../services/nlp.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-visual-nlp',
  templateUrl: './visual-nlp.component.html',
  styleUrls: ['./visual-nlp.component.css']
})
export class VisualNLPComponent implements OnInit {

  nlpInputText: String = '';
  nlpService: NlpService;
  nlpResults: NlpResults = new NlpResults();

  constructor(nlpService: NlpService) {
    this.nlpService = nlpService;
  }

  ngOnInit() {
  }

  onSubmitTextToProcess(text) {
    console.log('receiving text to process: ' + text);
    this.nlpInputText = text;
    this.nlpResults = this.nlpService.processText(this.nlpInputText);
    const observer = this.nlpService.requestNlpResults(text)
      .subscribe(value => console.log('response: ' + value));
  }

}
