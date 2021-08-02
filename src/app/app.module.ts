import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadersComponent } from './shared/components/headers/headers.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
