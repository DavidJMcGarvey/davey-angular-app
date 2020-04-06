import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { 
  EntryListComponent,
  EntryComponent,
  EntryService
} from './entries';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    EntryService,
  ],
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
  
}