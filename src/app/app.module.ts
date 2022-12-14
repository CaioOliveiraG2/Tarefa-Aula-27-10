import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';
import { MultiplicationTableComponent } from './components/multiplication-table/multiplication-table.component';
import { TimerComponent } from './components/timer/timer.component';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    MultiplicationTableComponent,
    TimerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
