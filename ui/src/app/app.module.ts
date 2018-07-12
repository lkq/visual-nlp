import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartOfSpeechComponent } from './part-of-speech/part-of-speech.component';
import { PosTagComponent } from './pos-tag/pos-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    PartOfSpeechComponent,
    PosTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
