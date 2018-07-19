import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PosSentenceComponent } from './pos-sentence/pos-sentence.component';
import { PosTagComponent } from './pos-token/pos-token.component';
import { NLPInputComponent } from './nlp-input/nlp-input.component';
import { VisualNLPComponent } from './visual-nlp/visual-nlp.component';

import { FormsModule } from '@angular/forms';
import { NlpService } from './services/nlp.service';

@NgModule({
  declarations: [
    AppComponent,
    PosSentenceComponent,
    PosTagComponent,
    NLPInputComponent,
    VisualNLPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NlpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
