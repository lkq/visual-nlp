import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-of-speech',
  templateUrl: './part-of-speech.component.html',
  styleUrls: ['./part-of-speech.component.css']
})
export class PartOfSpeechComponent implements OnInit {

  token: String = 'kingson';
  tag: String = 'NN';
  tagName: String = 'Noun';

  constructor() { }

  ngOnInit() {
  }

}
