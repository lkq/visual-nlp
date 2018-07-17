import { Component, OnInit, Input } from '@angular/core';
import { PosToken } from '../services/nlp-results';

@Component({
  selector: 'app-pos-sentence',
  templateUrl: './pos-sentence.component.html',
  styleUrls: ['./pos-sentence.component.css']
})

export class PosSentenceComponent implements OnInit {

  @Input()
  tokens: Array<PosToken> = [];

  constructor() { }

  ngOnInit() {
  }

}
