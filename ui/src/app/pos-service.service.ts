import { Injectable } from '@angular/core';
import { PosToken } from './part-of-speech/pos-token';

const posData = require('./mock-pos.js');

@Injectable({
  providedIn: 'root'
})
export class PosServiceService {

  constructor() { }

  processPartOfSpeech(text: String): Array<PosToken> {
    const mockData = this.getMockPartOfSpeech();
    return mockData.partOfSpeech;
    // return posData;
  }

  getMockPartOfSpeech() {
    return {
      text: 'this is kingson nice to meet you.',
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
