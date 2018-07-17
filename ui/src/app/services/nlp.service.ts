import { Injectable } from '@angular/core';
import { PosToken, NlpResults } from './nlp-results';

@Injectable({
  providedIn: 'root'
})
export class NlpService {

  constructor() { }

  public processText(text: String): NlpResults {
    const mockData = this.getNlpResultsMock();
    return mockData;
  }

  getNlpResultsMock() {
    return {
      partOfSpeech: [
        {
          token: 'this',
          tag: 'DT',
          tagName: 'Determiner'
        },
        {
          token: 'is',
          tag: 'VBZ',
          tagName: 'Verb, 3rd person singular present'
        },
        {
          token: 'kingson',
          tag: 'NN',
          tagName: 'Noun, singular or mass'
        },
        {
          token: 'nice',
          tag: 'JJ',
          tagName: 'Adjective'
        },
        {
          token: 'to',
          tag: 'TO',
          tagName: 'to'
        },
        {
          token: 'meet',
          tag: 'VB',
          tagName: 'Verb, base form'
        },
        {
          token: 'you',
          tag: 'PRP',
          tagName: 'Personal pronoun'
        },
        {
          token: '.',
          tag: '.',
          tagName: null
        }
      ]
    };
  }
}
