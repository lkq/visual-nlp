import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nlp-input',
  templateUrl: './nlp-input.component.html',
  styleUrls: ['./nlp-input.component.css']
})
export class NLPInputComponent implements OnInit {

  @Input()
  content: String = '';

  constructor() { }

  ngOnInit() {
  }

}
