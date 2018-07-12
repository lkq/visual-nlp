import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pos-tag',
  templateUrl: './pos-tag.component.html',
  styleUrls: ['./pos-tag.component.css']
})
export class PosTagComponent implements OnInit {

  @Input()
  token: String = '';
  @Input()
  tag: String = '';
  @Input()
  tagName: String = '';
  constructor() { }

  ngOnInit() {
  }

}
