import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { WindowRefService } from './services/window-ref.service';
import { UiComponent } from './ui/ui.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    EngineComponent,
    UiComponent
  ],
  providers: [ WindowRefService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
