import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { D3GraphsComponent } from './components/d3-graphs/d3-graphs.component';
import {D3GraphsService} from './services/d3-graphs.service';


@NgModule({
  declarations: [
    AppComponent,
    D3GraphsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [D3GraphsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
