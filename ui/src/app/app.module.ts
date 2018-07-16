import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartOfSpeechComponent } from './part-of-speech/part-of-speech.component';
import { PosTagComponent } from './pos-tag/pos-tag.component';
import { NLPInputComponent } from './nlp-input/nlp-input.component';
import { VisualNLPComponent } from './visual-nlp/visual-nlp.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PartOfSpeechComponent,
    PosTagComponent,
    NLPInputComponent,
    VisualNLPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
