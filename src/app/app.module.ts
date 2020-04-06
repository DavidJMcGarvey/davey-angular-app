import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { 
  EntryListComponent,
  EntryComponent,
  EntryService
} from './entries';
import { InMemoryEntryService } from './backend';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryEntryService),
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