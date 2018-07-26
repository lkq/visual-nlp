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
    console.log('nlp processing: ' + text);
    this.nlpInputText = text;
    const observer = this.nlpService.requestNlpResults(text)
      .subscribe(nlpResult => {
        console.log('nlp process results:' + JSON.stringify(nlpResult));
        this.nlpResults = nlpResult;
      });
  }

}
