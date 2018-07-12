import { Component, OnInit } from '@angular/core';
import { PosToken } from './pos-token';

@Component({
  selector: 'app-part-of-speech',
  templateUrl: './part-of-speech.component.html',
  styleUrls: ['./part-of-speech.component.css']
})
export class PartOfSpeechComponent implements OnInit {

  posTokens: Array<PosToken> = [{token: 'kingson', tag: 'NN', tagName: 'Noun'}];

  constructor() { }

  ngOnInit() {
  }

}
