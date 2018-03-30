import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { EngineComponent } from './engine/engine.component';
import { EngineService } from './engine/engine.service';

import { UiComponent } from './ui/ui.component';
import { UiSidebarLeftComponent } from './ui/ui-sidebar-left/ui-sidebar-left.component';
import { UiSidebarRightComponent } from './ui/ui-sidebar-right/ui-sidebar-right.component';
import { UiInfobarTopComponent } from './ui/ui-infobar-top/ui-infobar-top.component';
import { UiInfobarBottomComponent } from './ui/ui-infobar-bottom/ui-infobar-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent,
    UiInfobarTopComponent,
    UiComponent,
    UiInfobarBottomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
