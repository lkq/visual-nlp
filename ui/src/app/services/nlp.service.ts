import { Injectable } from '@angular/core';
import { NlpResults } from './nlp-results';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NlpService {

  http: HttpClient;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(http: HttpClient) {
    this.http = http;
  }

  processText(text: string): NlpResults {
    const mockData = this.getNlpResultsMock();
    return mockData;
  }

  requestNlpResults(text: string): Observable<NlpResults> {
    return this.http.post<NlpResults>('api/nlp', text, this.httpOptions);
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
