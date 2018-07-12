import { Component, OnInit, Input } from '@angular/core';
import { PosToken } from '../part-of-speech/pos-token';

@Component({
  selector: 'app-pos-tag',
  templateUrl: './pos-tag.component.html',
  styleUrls: ['./pos-tag.component.css']
})
export class PosTagComponent implements OnInit {

  @Input()
  pos: PosToken;
  constructor() { }

  ngOnInit() {
  }

}
