import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableBackgroundComponent } from './component/scrollable-background/scrollable-background.component';
import { CommandInfoComponent } from './component/command-info/command-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableBackgroundComponent,
    CommandInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
