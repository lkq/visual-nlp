import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visual-nlp',
  templateUrl: './visual-nlp.component.html',
  styleUrls: ['./visual-nlp.component.css']
})
export class VisualNLPComponent implements OnInit {

  @Input()
  nlpInput: String = '';
  constructor() { }

  ngOnInit() {
  }

}
