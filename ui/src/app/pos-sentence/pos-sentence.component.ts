import { Component, OnInit } from '@angular/core';
import { PosToken } from './pos-token';

@Component({
  selector: 'app-pos-sentence',
  templateUrl: './pos-sentence.component.html',
  styleUrls: ['./pos-sentence.component.css']
})

export class PosSentenceComponent implements OnInit {

  tokens: Array<PosToken> = [{token: 'kingson', tag: 'NN', tagName: 'Noun'}];

  constructor() { }

  ngOnInit() {
  }

}
