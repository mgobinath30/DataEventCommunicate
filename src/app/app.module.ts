import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { PropertybindingParentComponent } from './propertybinding-parent/propertybinding-parent.component';
import { ComunicateComponent } from './comunicate/comunicate.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    PropertybindingParentComponent,
    ComunicateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
