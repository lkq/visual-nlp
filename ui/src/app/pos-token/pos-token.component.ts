import { Component, OnInit, Input } from '@angular/core';
import { PosToken } from '../services/nlp-results';

@Component({
  selector: 'app-pos-token',
  templateUrl: './pos-token.component.html',
  styleUrls: ['./pos-token.component.css']
})
export class PosTagComponent implements OnInit {

  @Input()
  pos: PosToken;
  constructor() { }

  ngOnInit() {
  }

}
